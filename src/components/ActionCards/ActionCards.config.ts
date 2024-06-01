import messageImg from "../../assets/imgs/message.png";
import musicImg from "../../assets/imgs/music.png";
import telegramImg from "../../assets/imgs/telegram.png";
import usersGroupImg from "../../assets/imgs/users-group.png";

export const actionCardsList = [
  {
    title: "Join community",
    subtitle: "Subscribe channel",
    img: messageImg,
    path: "/",
  },
  {
    title: "Invite friens",
    subtitle: "+10 TONM",
    img: usersGroupImg,
    path: "/",
  },
  {
    title: "Get free TONM",
    subtitle: "Just listening to mus",
    img: musicImg,
    className: "bg-[#B00FB4]",
    path: "/",
  },
  {
    title: "Contact to team",
    subtitle: "Offer or help",
    img: telegramImg,
    path: "/",
  },
];
