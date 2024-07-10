import { FC, useCallback, useContext, useEffect, useState } from "react";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Navigation from "../Navigation";
import { ILayout } from "./Layout.interface";

import { useInitData } from "@tma.js/sdk-react";
import { useLocation } from "react-router-dom";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { onSetMoney } from "../../redux/slices/clickerSlice";
import {
  setCurrentMusic,
  setIndexMusic,
  setIsAutoplayMusic,
} from "../../redux/slices/musicSlice";
import { SocketContext } from "../../socket/socket";
import ModalSwiper from "../ModalSwiper";

const Layout: FC<ILayout> = ({ children }) => {
  const { load, stop, seek } = useGlobalAudioPlayer();

  const dispatch = useAppDispatch();
  const location = useLocation();

  const initData = useInitData();
  const socket = useContext(SocketContext);

  // const viewport = useViewport();

  const currentMusic = useAppSelector((state) => state.music.currentMusic);
  const listMusic = useAppSelector((state) => state.music.list);
  const isAutoplay = useAppSelector((state) => state.music.isAutoplay);
  const indexMusic = useAppSelector((state) => state.music.index);

  const clicker = useAppSelector((state) => state.clicker);

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
    const id = setInterval(() => {
      dispatch(onSetMoney(clicker.money + 3));
    }, 1000);

    return () => clearInterval(id);
  }, []);

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
    load(currentMusic.link, {
      autoplay: isAutoplay,
      html5: true,
      format: "mp3",
      onend: onEnd,
    });
  }, [currentMusic.link, isAutoplay, load, onEnd]);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    socket?.on("connect", () => {
      socket?.emit("getUserClickerData", {
        telegramId: initData?.user?.id,
      });
      socket?.on("getUserClickerData", (data) => {
        localStorage.setItem("energy", data.energy);
        dispatch(onSetMoney(data.coins));
      });
    });
  }, [socket]);

  return (
    <div
      className="bg-black flex flex-col w-full px-4 pt-1 overflow-y-auto"
      style={{
        height: "100vh",
      }}
    >
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
