import { FC, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { CloseIcon, ShareOutlineIcon } from "../../assets/icons";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAudioTime } from "../../hooks/useAudioTime";
import {
  setCurrentMusic,
  setIndexMusic,
  setIsAutoplayMusic,
} from "../../redux/state/musicSlice";
import { convertSecondsToMinutesAndSeconds } from "../../utils";
import Modal from "../Modal";
import PlayerControl from "../PlayerControl";
import { IModalPlayer } from "./ModalPlayer.interface";

// TODO: Неиспользуемый компонент

const ModalPlayer: FC<IModalPlayer> = ({
  handleClose,
  isOpen,
  onChangeRate,
}) => {
  const sliderRef = useRef<Slider>(null);
  const dispatch = useAppDispatch();
  const listMusic = useAppSelector((state) => state.music.list);
  const currentMusic = useAppSelector((state) => state.music.currentMusic);
  const indexMusic = useAppSelector((state) => state.music.index);

  const time = useAudioTime();
  const { duration } = useGlobalAudioPlayer();

  const settings: Settings = {
    className: "mt-10",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    lazyLoad: "anticipated",
    beforeChange(_, nextSlide) {
      dispatch(setIndexMusic(nextSlide));
      dispatch(setCurrentMusic(listMusic[nextSlide]));
      dispatch(setIsAutoplayMusic(true));
    },
  };

  useEffect(() => {
    sliderRef.current?.slickGoTo(indexMusic, false);
  }, [indexMusic, isOpen]);

  const onNext = () => {
    sliderRef.current?.slickNext();
  };

  const onPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <button className="absolute right-4 top-4" onClick={handleClose}>
        <CloseIcon />
      </button>

      <div className="flex flex-col justify-between h-full pb-5">
        <div className="slider-container">
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
        </div>

        <div className="flex flex-col gap-4 px-5">
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
    </Modal>
  );
};

export default ModalPlayer;
