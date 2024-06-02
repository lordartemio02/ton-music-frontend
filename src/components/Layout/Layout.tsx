import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Navigation from "../Navigation";
import { ILayout } from "./Layout.interface";

import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useAppSelector } from "../../hooks/useAppSelector";
import data from "../../mock/audiolist.json";
import ModalSwiper from "../ModalSwiper";

const Layout: FC<ILayout> = ({ children }) => {
  const { load } = useGlobalAudioPlayer();
  const location = useLocation();
  const rx = new RegExp(/player$/, "i");

  const currentMucsic = useAppSelector((state) => state.music.currentMusic);
  const isAutoplay = useAppSelector((state) => state.music.isAutoplay);

  const isRenderMusicPanel = rx.test(location.pathname);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("modal")) {
      localStorage.setItem("modal", "true");
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    load(currentMucsic.link, {
      autoplay: isAutoplay,
      html5: true,
      format: "mp3",
    });
  }, [currentMucsic.link, isAutoplay, load]);

  const audioIndex = Number(localStorage.getItem("audioIndex")) || 0;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col w-full px-4 pt-1">
      <Header />
      <main className="flex-1 text-white mt-4 mb-[135px]">{children}</main>
      <div className="fixed w-full left-0 bottom-0 z-10">
        {!isRenderMusicPanel && (
          <ControlMusicPanel
            name={data[audioIndex].name}
            artist={data[audioIndex].artist}
            img={`/images/${data[audioIndex].img}.png`}
          />
        )}
        <Navigation />
      </div>
      <ModalSwiper isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Layout;
