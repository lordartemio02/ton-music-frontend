import { Button } from "@telegram-apps/telegram-ui";
import { FC, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { CloseIcon, DucksIcons } from "../../assets/icons";
import { SLICK_SETTINGS } from "../../config";
import Modal from "../Modal";
import ModalPreviewContent from "../ModalPreviewContent";
import SliderPoint from "../SliderPoint";
import { IModalSwiper } from "./ModalSwiper.interface";

const ModalSwiper: FC<IModalSwiper> = ({ onClose, isOpen }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const settings: Settings = {
    ...SLICK_SETTINGS,
    infinite: false,
    slidesToShow: 1,
    beforeChange(_, nextSlide) {
      setActiveSlide(nextSlide);
    },
  };

  const onNext = (isLast = false) => {
    if (isLast) {
      return onClose();
    }

    sliderRef.current?.slickNext();
  };

  const onPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderList = [
    {
      icon: <DucksIcons.DuckTgIcon />,
      title: "Listen to music in Telegram",
      description: "and collect your own playlist",
      buttons: (
        <Button onClick={() => onNext()} mode="filled" size="l">
          Next
        </Button>
      ),
    },
    {
      icon: <DucksIcons.DuckStarIcon />,
      title: "Listen to music and mine coin",
      description: "Tap, invite friends and do tasks",
      buttons: (
        <div className="grid grid-cols-3 gap-4">
          <Button onClick={onPrev} mode="bezeled" size="l">
            Back
          </Button>
          <Button
            onClick={() => onNext()}
            mode="filled"
            size="l"
            className="col-span-2"
          >
            Next
          </Button>
        </div>
      ),
    },
    {
      icon: <DucksIcons.DuckAirIcon />,
      title: "Make music revolution with us!",
      description: "Download music and get royalty!",
      buttons: (
        <div className="grid grid-cols-3 gap-4">
          <Button onClick={onPrev} mode="bezeled" size="l">
            Back
          </Button>
          <Button
            onClick={() => onNext(true)}
            mode="filled"
            size="l"
            className="col-span-2"
          >
            GO!
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Modal handleClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col">
        <div className="flex justify-center px-3 pt-1 mb-11 relative">
          <div className="flex flex-row items-center justify-center gap-1 h-7">
            {sliderList.map((_, i) => (
              <SliderPoint
                key={`slide-home-${i}`}
                isActive={i === activeSlide}
              />
            ))}
          </div>
          <button className="absolute right-1 top-1" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <Slider ref={sliderRef} {...settings} className="w-screen h-screen">
          {sliderList.map((item, index) => (
            <ModalPreviewContent
              key={`slide-preview-${index}`}
              icon={item.icon}
              title={item.title}
              description={item.description}
              buttons={item.buttons}
            />
          ))}
        </Slider>
      </div>
    </Modal>
  );
};

export default ModalSwiper;
