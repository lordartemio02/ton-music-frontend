import { useInitData } from "@tma.js/sdk-react";
import { FC, useEffect } from "react";
import "swiper/css";
import CrazyFrog from "../components/CrazyFrog";
import { useSocketio } from "../hooks/useSocketio";
import { Events } from "../interfaces/events.enum";

const { VITE_APP_BASE_URL_SOCKET: wsUri } = import.meta.env;

const HomePage: FC = () => {
  const initData = window.Telegram?.WebApp.initData;
  const initDataUser = useInitData();

  console.log(initData);

  const socket = useSocketio(wsUri, {
    autoConnect: true,
    transports: ["websocket", "polling"],
    query: { initData: initDataUser },
  });

  useEffect(() => {
    socket?.on("connect", () => {
      socket?.emit(Events.Registration, { initData });
      socket?.emit("getUserClickerData", {
        telegramId: initDataUser?.user?.id,
      });

      socket.on("disconnect", (data) => {
        console.log(data);
      });
    });
  }, [socket, initDataUser]);

  return (
    <div className="h-[calc(100vh-192px)] flex flex-col justify-center">
      <CrazyFrog />
    </div>
  );
};

export default HomePage;
