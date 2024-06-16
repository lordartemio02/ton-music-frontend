import { FC, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { ShareOutlineIcon } from "../assets/icons";
import PlayerControl from "../components/PlayerControl";
import { SLICK_SETTINGS } from "../config";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAudioTime } from "../hooks/useAudioTime";
import {
  setCurrentMusic,
  setIndexMusic,
  setIsAutoplayMusic,
} from "../redux/state/musicSlice";
import { convertSecondsToMinutesAndSeconds } from "../utils";

const PlayerPage: FC = () => {
  const sliderRef = useRef<Slider>(null);
  const dispatch = useAppDispatch();
  const listMusic = useAppSelector((state) => state.music.list);
  const currentMusic = useAppSelector((state) => state.music.currentMusic);
  const indexMusic = useAppSelector((state) => state.music.index);

  const time = useAudioTime();
  const { duration, seek } = useGlobalAudioPlayer();

  const settings: Settings = {
    ...SLICK_SETTINGS,
    className: "mt-10",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    beforeChange(_, nextSlide) {
      dispatch(setIndexMusic(nextSlide));
      dispatch(setCurrentMusic(listMusic[nextSlide]));
      dispatch(setIsAutoplayMusic(true));
    },
  };

  useEffect(() => {
    sliderRef.current?.slickGoTo(indexMusic, false);
  }, [indexMusic]);

  const onNext = () => {
    sliderRef.current?.slickNext();
  };

  const onPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const onChangeRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    seek(parseInt(event.target.value, 10));
  };

  return (
    <div className="flex flex-col justify-between h-full pb-5">
      <Slider ref={sliderRef} {...settings}>
        {listMusic.map((item) => (
          <div key={item.id} className="overflow-hidden p-3">
            <img
              src={`/images/${item.img}.png`}
              alt={`${item.artist} ${item.name}`}
              className="w-full h-full object-cover rounded-[18px]"
            />
          </div>
        ))}
      </Slider>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="text-white text-[17px] font-semibold">
              {currentMusic.name}
            </div>
            <div className="text-[#707579] text-[13px]">
              {currentMusic.artist}
            </div>
          </div>
          <ShareOutlineIcon
            onClick={() => console.log("afsa")}
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="range"
            min={0}
            value={time}
            max={duration}
            onChange={onChangeRate}
            className="[&::-webkit-slider-thumb]:!shadow-none accent-white bg-[#707579] h-[3px] mb-2 [&::-webkit-slider-thumb]:appearance-auto"
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
