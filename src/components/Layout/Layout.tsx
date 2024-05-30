import { FC } from "react";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Navigation from "../Navigation";
import { ILayout } from "./Layout.interface";

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col w-full px-4 pt-1">
      <Header />
      <main className="flex-1 text-white mt-4 mb-[135px]">{children}</main>
      <div className="fixed w-full left-0 bottom-0">
        <ControlMusicPanel
          name="За Тебя Родина-Мать"
          artist="Любэ"
          src="https://cdn4.drivemusic.me/dl/online/KHlun1U6st2yNZzv7HSNaQ/1716873661/download_music/2014/02/ljubje-za-tebja-rodina-mat.mp3"
          img="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY"
        />
        <Navigation />
      </div>
    </div>
  );
};

export default Layout;
