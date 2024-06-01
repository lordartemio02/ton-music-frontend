import { FC, useCallback, useEffect, useRef } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShareOutlineIcon } from "../assets/icons";
import PlayerControl from "../components/PlayerControl";
import { useAudioTime } from "../hooks/useAudioTime";
import { convertSecondsToMinutesAndSeconds } from "../utils";

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

const data = [
  {
    id: "1",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    title: "test 1",
    audio:
      "https://dnl2.drivemusic.me/dl/MI00mDmG1HnNwwlIznC-Ow/1717298237/download_music/2018/03/jauz-feat.-example-in-the-zone.mp3",
  },
  {
    id: "2",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    title: "test 2",
    audio:
      "https://cdn4.drivemusic.me/dl/online/KHlun1U6st2yNZzv7HSNaQ/1716873661/download_music/2014/02/ljubje-za-tebja-rodina-mat.mp3",
  },
  {
    id: "3",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    title: "test 3",
    audio:
      "https://dnl2.drivemusic.me/dl/MI00mDmG1HnNwwlIznC-Ow/1717298237/download_music/2018/03/jauz-feat.-example-in-the-zone.mp3",
  },
  {
    id: "4",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    title: "test 4",
    audio:
      "https://dnl2.drivemusic.me/dl/MI00mDmG1HnNwwlIznC-Ow/1717298237/download_music/2018/03/jauz-feat.-example-in-the-zone.mp3",
  },

  {
    id: "5",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    title: "test 5",
    audio:
      "https://dnl2.drivemusic.me/dl/MI00mDmG1HnNwwlIznC-Ow/1717298237/download_music/2018/03/jauz-feat.-example-in-the-zone.mp3",
  },
];

const PlayerPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const time = useAudioTime();
  const { load, seek, duration } = useGlobalAudioPlayer();

  const handleShare = () => {
    console.log("share");
  };

  useEffect(() => {
    load(data[0].audio, {
      autoplay: false,
      html5: true,
      format: "mp3",
    });
  }, []);

  const onChangeRate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      seek(parseInt(event.target.value, 10));
    },
    [seek]
  );

  const onNext = () => {
    if (!ref.current?.swiper) return;

    ref.current?.swiper.slideNext();

    load(data[ref.current?.swiper.activeIndex].audio, {
      autoplay: true,
      html5: true,
      format: "mp3",
    });
  };

  const onPrev = () => {
    if (!ref.current?.swiper) return;

    ref.current?.swiper.slidePrev();

    load(data[ref.current?.swiper.activeIndex].audio, {
      autoplay: true,
      html5: true,
      format: "mp3",
    });
  };

  return (
    <div>
      <Swiper
        ref={ref}
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={true}
        breakpoints={breakpoints}
        className="h-[250px]"
        onSlideChange={(e) =>
          load(data[e.activeIndex].audio, {
            autoplay: true,
            html5: true,
            format: "mp3",
          })
        }
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-red-500 rounded-[18px] overflow-hidden"
          >
            <img src={item.src} alt="" className="w-fyll h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="text-white text-[17px] font-semibold">Apache</div>
            <div className="text-[#707579] text-[13px]">Bvrnout</div>
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
