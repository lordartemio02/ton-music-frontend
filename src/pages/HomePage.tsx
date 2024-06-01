import { FC, useState } from "react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import {
  BigPauseIcon,
  BigPlayIcon,
  BigTonIcon,
  CloseIcon,
} from "../assets/icons";
import ActionCards from "../components/ActionCards";
import Modal from "../components/Modal";
import ModalEndContent from "../components/ModalEndContent";
import ModalStartContent from "../components/ModalStartContent";
import MusicPlaying from "../components/MusicPlaying";
import Slider from "../components/Slider";
import SliderPoint from "../components/SliderPoint";

const HomePage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <>
      <MusicPlaying />
      <ActionCards />
      <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <div className="flex flex-col">
          <div className="flex justify-between px-3 pt-1 mb-11">
            <div className="w-7 h-7"></div>
            <div className="flex flex-row items-center justify-center gap-1">
              {[0, 1, 2].map((_, i) => (
                <SliderPoint isActive={i === activeSlide} />
              ))}
            </div>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <Slider onChange={(e) => setActiveSlide(e.activeIndex)}>
            <SwiperSlide className="flex flex-col gap-11">
              <ModalStartContent
                footerText="button"
                headerText="magic"
                classNameBlur="bg-[#007AFF]"
                icon={<BigPlayIcon />}
              />
              <ModalEndContent
                headerText="Listen to music"
                footerText="and get free crypto tokens TONM"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-11">
              <ModalStartContent
                footerText="music"
                headerText="infinity"
                classNameBlur="bg-[#B00FB4]"
                icon={<BigPauseIcon />}
              />
              <ModalEndContent
                headerText="Invite friends"
                footerText="and get rewards"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col gap-11">
              <ModalStartContent
                footerText="ton"
                headerText="earn"
                classNameBlur="bg-[#E53935]"
                icon={<BigTonIcon />}
              />
              <ModalEndContent
                headerText="Upload music"
                footerText="and get royalty"
              />
            </SwiperSlide>
          </Slider>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
