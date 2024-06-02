import { FC, useState } from "react";
import { SwiperSlide } from "swiper/react";
import {
  BigPauseIcon,
  BigPlayIcon,
  BigTonIcon,
  CloseIcon,
} from "../../assets/icons";
import Modal from "../Modal";
import ModalEndContent from "../ModalEndContent";
import ModalStartContent from "../ModalStartContent";
import Slider from "../Slider";
import SliderPoint from "../SliderPoint";
import { IModalSwiper } from "./ModalSwiper.interface";

const sliderList = [
  {
    icon: BigPlayIcon,
    footerText: "button",
    headerText: "magic",
    classNameBlur: "bg-[#007AFF]",
    headerTextEnd: "Listen to music",
    footerTextEnd: "and get free crypto tokens TONM",
  },
  {
    icon: BigPauseIcon,
    footerText: "music",
    headerText: "infinity",
    classNameBlur: "bg-[#B00FB4]",
    headerTextEnd: "Invite friends",
    footerTextEnd: "and get rewards",
  },
  {
    icon: BigTonIcon,
    footerText: "ton",
    headerText: "earn",
    classNameBlur: "bg-[#E53935]",
    headerTextEnd: "Upload music",
    footerTextEnd: "and get royalty",
  },
];

const ModalSwiper: FC<IModalSwiper> = ({ onClose, isOpen }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <Modal handleClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col">
        <div className="flex justify-between px-3 pt-1 mb-11">
          <div className="w-7 h-7"></div>
          <div className="flex flex-row items-center justify-center gap-1">
            {sliderList.map((_, i) => (
              <SliderPoint
                key={`slide-home-${i}`}
                isActive={i === activeSlide}
              />
            ))}
          </div>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <Slider onChange={(e) => setActiveSlide(e.activeIndex)}>
          {sliderList.map((item, index) => (
            <SwiperSlide
              key={`slide-swiper-${index}`}
              className="flex flex-col gap-11"
            >
              <ModalStartContent
                footerText={item.footerText}
                headerText={item.footerText}
                classNameBlur={item.classNameBlur}
                icon={<item.icon />}
              />
              <ModalEndContent
                headerText={item.headerTextEnd}
                footerText={item.footerTextEnd}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </Modal>
  );
};

export default ModalSwiper;
