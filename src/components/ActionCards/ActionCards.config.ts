import { initUtils } from "@tma.js/sdk";
import messageImg from "../../assets/imgs/message.png";
import musicImg from "../../assets/imgs/music.png";
import telegramImg from "../../assets/imgs/telegram.png";
import usersGroupImg from "../../assets/imgs/users-group.png";

export const actionCardsList = [
  {
    title: "Join community",
    subtitle: "Subscribe channel",
    img: messageImg,
    onClick: () => {
      const utils = initUtils();
      utils.openTelegramLink("https://t.me/tonmusiccommunity");
    },
    path: "/",
  },
  {
    title: "Invite friens",
    subtitle: "+10 TONM",
    img: usersGroupImg,
    onClick: () => {
      const utils = initUtils();
      utils.openTelegramLink(
        "https://t.me/share/url?url=https://t.me/ton_music_bot"
      );
    },
    path: "/",
  },
  {
    title: "Get Airdrop",
    subtitle: "Just listening to mus",
    img: musicImg,
    className: "bg-[#B00FB4]",
    path: "/",
  },
  {
    title: "Contact to team",
    subtitle: "Offer or help",
    img: telegramImg,
    onClick: () => {
      const utils = initUtils();
      utils.openTelegramLink("https://t.me/iamidrisov");
    },
    path: "/",
  },
];
