import { FC, useCallback, useEffect, useState } from "react";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Navigation from "../Navigation";
import { ILayout } from "./Layout.interface";

import { useLocation } from "react-router-dom";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  setCurrentMusic,
  setIndexMusic,
  setIsAutoplayMusic,
} from "../../redux/state/musicSlice";
import ModalSwiper from "../ModalSwiper";

const Layout: FC<ILayout> = ({ children }) => {
  const { load, stop, seek } = useGlobalAudioPlayer();

  const dispatch = useAppDispatch();
  const location = useLocation();

  // const viewport = useViewport();

  const currentMucsic = useAppSelector((state) => state.music.currentMusic);
  const listMusic = useAppSelector((state) => state.music.list);
  const isAutoplay = useAppSelector((state) => state.music.isAutoplay);
  const indexMusic = useAppSelector((state) => state.music.index);

  const [isOpen, setIsOpen] = useState(false);
  const [isShowMusicPanel, setIsShowMusicPanel] = useState(true);

  const classNameMain = !isShowMusicPanel ? "mb-[71px]" : "mb-[135px]";

  useEffect(() => {
    if (location.pathname === "/player") {
      setIsShowMusicPanel(false);
    } else {
      setIsShowMusicPanel(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!localStorage.getItem("modal")) {
      localStorage.setItem("modal", "true");
      setIsOpen(true);
    }
  }, []);

  const onEnd = useCallback(() => {
    const nextIndexMusic = indexMusic + 1;

    if (listMusic.length - 1 < nextIndexMusic) {
      stop();
      seek(0);

      return;
    }

    dispatch(setIndexMusic(nextIndexMusic));
    dispatch(setCurrentMusic(listMusic[nextIndexMusic]));
    dispatch(setIsAutoplayMusic(true));
  }, [dispatch, indexMusic, listMusic, seek, stop]);

  useEffect(() => {
    load(currentMucsic.link, {
      autoplay: isAutoplay,
      html5: true,
      format: "mp3",
      onend: onEnd,
    });
  }, [currentMucsic.link, isAutoplay, load, onEnd]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="bg-black flex flex-col w-full px-4 pt-1 overflow-y-auto"
      style={{
        height: "100vh",
      }}>
      <Header />
      <main className={`flex-1 text-white mt-4 ${classNameMain}`}>
        {children}
      </main>
      <div className="fixed w-full left-0 bottom-0 z-10">
        {isShowMusicPanel && <ControlMusicPanel />}
        <Navigation />
      </div>
      <ModalSwiper isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Layout;
