import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import {
  BigPauseIcon,
  BigPlayIcon,
  BigTonIcon,
  CloseIcon,
} from "../../assets/icons";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Modal from "../Modal";
import ModalEndContent from "../ModalEndContent";
import ModalStartContent from "../ModalStartContent";
import Navigation from "../Navigation";
import Slider from "../Slider";
import SliderPoint from "../SliderPoint";
import { ILayout } from "./Layout.interface";

import data from "../../mock/audiolist.json";

const Layout: FC<ILayout> = ({ children }) => {
  const location = useLocation();
  const rx = new RegExp(/player$/, "i");

  const isRenderMusicPanel = rx.test(location.pathname);

  const [isOpen, setIsOpen] = useState(false);

  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    if (!localStorage.getItem("modal")) {
      localStorage.setItem("modal", "true");
      setIsOpen(true);
    }
  }, []);

  const audioIndex = Number(localStorage.getItem("audioIndex")) || 0;

  return (
    <div className="min-h-screen bg-black flex flex-col w-full px-4 pt-1">
      <Header />
      <main className="flex-1 text-white mt-4 mb-[135px]">{children}</main>
      <div className="fixed w-full left-0 bottom-0 z-10">
        {!isRenderMusicPanel && (
          <ControlMusicPanel
            name={data[audioIndex].name}
            artist={data[audioIndex].artist}
            src={data[audioIndex].link}
            img={`/images/${data[audioIndex].img}.png`}
          />
        )}
        <Navigation />
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <div className="flex flex-col">
          <div className="flex justify-between px-3 pt-1 mb-11">
            <div className="w-7 h-7"></div>
            <div className="flex flex-row items-center justify-center gap-1">
              {[0, 1, 2].map((_, i) => (
                <SliderPoint
                  key={`slide-home-${i}`}
                  isActive={i === activeSlide}
                />
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
    </div>
  );
};

export default Layout;
