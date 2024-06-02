import { FC, useCallback, useEffect, useRef } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShareOutlineIcon } from "../assets/icons";
import PlayerControl from "../components/PlayerControl";
import { useAudioTime } from "../hooks/useAudioTime";
import { convertSecondsToMinutesAndSeconds } from "../utils";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import data from "../mock/audiolist.json";
import { setCurrentMusic, setIsAutoplayMusic } from "../redux/state/musicSlice";

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  660: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const PlayerPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const time = useAudioTime();
  const { seek, duration } = useGlobalAudioPlayer();

  const list = useAppSelector((state) => state.music.list);
  const dispatch = useAppDispatch();

  const handleShare = () => {
    console.log("share");
  };

  const onChangeRate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      seek(parseInt(event.target.value, 10));
    },
    [seek]
  );

  const onNext = () => {
    if (!ref.current?.swiper) return;

    ref.current?.swiper.slideNext();
    dispatch(setCurrentMusic(list[ref.current?.swiper.activeIndex]));
    dispatch(setIsAutoplayMusic(true));
  };

  const onPrev = () => {
    if (!ref.current?.swiper) return;

    ref.current?.swiper.slidePrev();
    dispatch(setCurrentMusic(list[ref.current?.swiper.activeIndex]));
    dispatch(setIsAutoplayMusic(true));
  };

  useEffect(() => {
    localStorage.setItem("audioIndex", ref.current?.swiper.activeIndex);
  }, [ref.current?.swiper.activeIndex]);

  return (
    <div
      ref={wrapperRef}
      className="mt-5 flex flex-col justify-between"
      style={{
        height: window.innerHeight - 135 - 70,
      }}
    >
      <Swiper
        ref={ref}
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={true}
        breakpoints={breakpoints}
        style={{
          height: Math.floor((window.innerHeight / 100) * 50),
          width: Math.floor(window.innerWidth - 32),
        }}
        onSlideChange={(e) => {
          dispatch(setCurrentMusic(list[e.activeIndex]));
          dispatch(setIsAutoplayMusic(true));
        }}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-red-500 rounded-[18px] overflow-hidden"
          >
            <img
              src={`/images/${item.img}.png`}
              alt={`${item.artist} ${item.name}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="text-white text-[17px] font-semibold">
              {data[ref.current?.swiper.activeIndex]?.name}
            </div>
            <div className="text-[#707579] text-[13px]">
              {data[ref.current?.swiper.activeIndex]?.artist}
            </div>
          </div>
          <ShareOutlineIcon onClick={handleShare} className="cursor-pointer" />
        </div>

        <div className="flex flex-col">
          <input
            type="range"
            min={0}
            value={time}
            max={duration}
            onChange={onChangeRate}
            className="[&::-webkit-slider-thumb]:!shadow-none accent-white bg-[#707579] h-[3px] mb-2"
          />

          <div className="flex items-center justify-between text-white text-[10px]">
            <div>{convertSecondsToMinutesAndSeconds(time)}</div>
            <div>-{convertSecondsToMinutesAndSeconds(duration)}</div>
          </div>
        </div>
        <PlayerControl onNext={onNext} pnPerv={onPrev} />
      </div>
    </div>
  );
};

export default PlayerPage;
