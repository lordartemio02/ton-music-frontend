import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Navigation from "../Navigation";
import { ILayout } from "./Layout.interface";

import data from "../../mock/audiolist.json";
import ModalSwiper from "../ModalSwiper";

const Layout: FC<ILayout> = ({ children }) => {
  const location = useLocation();
  const rx = new RegExp(/player$/, "i");

  const isRenderMusicPanel = rx.test(location.pathname);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("modal")) {
      localStorage.setItem("modal", "true");
      setIsOpen(true);
    }
  }, []);

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
            src={data[audioIndex].link}
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
