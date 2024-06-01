<<<<<<< HEAD
import Header from "./components/Header";

import { useState } from "react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import {
  BigPauseIcon,
  BigPlayIcon,
  BigTonIcon,
  CloseIcon,
} from "./assets/icons";
import Modal from "./components/Modal";
import ModalEndContent from "./components/ModalEndContent";
import ModalStartContent from "./components/ModalStartContent";
import Slider from "./components/Slider";
import SliderPoint from "./components/SliderPoint";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <>
      <div className="min-h-screen">
        <Header />
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
        {/* <div className="fixed bottom-0 left-0 w-full">
          <ControlMusicPanel
            name="За Тебя Родина-Мать"
            artist="Любэ"
            src="https://cdn4.drivemusic.me/dl/online/KHlun1U6st2yNZzv7HSNaQ/1716873661/download_music/2014/02/ljubje-za-tebja-rodina-mat.mp3"
            img="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY"
          />
        </div> */}
      </div>
    </>
=======
import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { authRoutes, publicRoutes } from "./routers";

const App: FC = () => {
  const isAuth = true;
  const [routs, setRouts] = useState(publicRoutes);

  useEffect(() => {
    if (!isAuth) {
      setRouts(publicRoutes);
    } else {
      setRouts(authRoutes);
    }
  }, [isAuth]);

  return (
    <Layout>
      <Routes>
        {routs.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            Component={route.component}
          />
        ))}
      </Routes>
    </Layout>
>>>>>>> ce705114678a4f05ee5ed4860beb0fd3c1fd2903
  );
};

export default App;
