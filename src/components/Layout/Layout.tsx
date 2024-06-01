import { FC } from "react";
import { useLocation } from "react-router-dom";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Navigation from "../Navigation";
import { ILayout } from "./Layout.interface";

const Layout: FC<ILayout> = ({ children }) => {
  const location = useLocation();
  const rx = new RegExp(/tasks$/, "i");

  const isRenderMusicPanel = rx.test(location.pathname);

  return (
    <div className="min-h-screen bg-black flex flex-col w-full px-4 pt-1">
      <Header />
      <main className="flex-1 text-white mt-4 mb-[135px]">{children}</main>
      <div className="fixed w-full left-0 bottom-0 z-10">
        {!isRenderMusicPanel && (
          <ControlMusicPanel
            name="За Тебя Родина-Мать"
            artist="Любэ"
            src="https://dnl2.drivemusic.me/dl/MI00mDmG1HnNwwlIznC-Ow/1717298237/download_music/2018/03/jauz-feat.-example-in-the-zone.mp3"
            img="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY"
          />
        )}
        <Navigation />
      </div>
    </div>
  );
};

export default Layout;
