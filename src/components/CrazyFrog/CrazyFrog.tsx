import { FC, useContext, useEffect, useRef, useState } from "react";

import { BoostIcon, NotificationsIcon, TonIcon } from "../../assets/icons";
import "./style.css";

import { Button } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import { useAudioPlayer, useGlobalAudioPlayer } from "react-use-audio-player";
import { useDebounce } from "../../hooks/useDebounce";
import data from "../../mock/audiolist.json";
import { SocketContext } from "../../socket/socket";

import { useInitData } from "@tma.js/sdk-react";
import crazyFrogImg from "../../assets/imgs/crazy-frog.png";

const CrazyFrog: FC = () => {
  const [scale, setScale] = useState(1);
  const [countClick, setCountClick] = useState(0);
  const ref = useRef<HTMLImageElement>(null);
  const initDataUser = useInitData();
  const valueDebounce = useDebounce(countClick);
  const [energy, setEnergy] = useState(0);

  const [scaleBLur, setScaleBlur] = useState(0.2); // Начальный масштаб
  const [isClicked, setIsClicked] = useState(false);

  const socket = useContext(SocketContext);

  // const { notificationOccurred } = useHapticFeedback();
  // const [error, setError] = useState<any>({});
  // const [someError, setSomeError] = useState<any>("noError");

  const outerRef = useRef(null);
  const navigate = useNavigate();

  const [blockPositions, setBlockPositions] = useState<any>([]);
  const [visible, setVisible] = useState(0);

  const { playing: playingGlobal } = useGlobalAudioPlayer();
  const { playing, load, play, pause, mute, muted } = useAudioPlayer();

  useEffect(() => {
    if (valueDebounce !== 0) {
      socket?.emit("click", {
        telegramId: initDataUser?.user?.id,
        amount: valueDebounce,
      });
      setCountClick(0);
    }
  }, [valueDebounce]);

  useEffect(() => {
    socket?.on("getUserClickerData", (data) => {
      setEnergy(data.energy);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("click", (data) => {
      setEnergy(data.energy);
      localStorage.setItem("energy", data.energy.toString());
    });
  }, [socket]);

  useEffect(() => {
    const handleAnimationEnd = (e: any) => {
      if (e.animationName === "fade-up-and-out") {
        e.target.remove();
      }
    };

    // Добавляем обработчик события animationend к каждому блоку
    document.querySelectorAll(".blocks").forEach((block) => {
      block.addEventListener("animationend", handleAnimationEnd);
    });

    return () => {
      // Удаляем обработчики событий animationend при размонтировании компонента
      document.querySelectorAll(".blocks").forEach((block) => {
        block.removeEventListener("animationend", handleAnimationEnd);
      });
    };
  }, [visible]);

  useEffect(() => {
    localStorage.removeItem("date");
    pause();
  }, [playingGlobal]);

  useEffect(() => {
    const id = setInterval(() => {
      const lsDate = localStorage.getItem("date");
      if (!!lsDate && playing) {
        const date = Date.now();

        const differenceInMillis = Math.abs(date - parseInt(lsDate, 10));

        // Преобразуем разницу в миллисекундах в секунды
        const differenceInSeconds = differenceInMillis / 1000;

        if (differenceInSeconds > 1) {
          pause();
          localStorage.removeItem("date");
        }
      }
    }, 500);

    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    load(data[1].link, {
      autoplay: false,
      html5: true,
      loop: true,
      format: "mp3",
    });
  }, []);

  const handleClick = (e: any) => {
    setVisible((prevVisible) => prevVisible + 1);
    let count = 0;
    let countEnergy = 0;

    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      const x = touch.clientX;
      const y = touch.clientY;
      let offsetX = 0,
        offsetY = 0;

      if (
        outerRef &&
        outerRef.current &&
        x >= outerRef.current["offsetLeft"] &&
        x <= outerRef.current["offsetLeft"] + outerRef.current["offsetWidth"] &&
        y >= outerRef.current["offsetTop"] &&
        y <= outerRef.current["offsetTop"] + outerRef.current["offsetHeight"]
      ) {
        offsetX = x - outerRef.current["offsetLeft"];
        offsetY = y - outerRef.current["offsetTop"];

        count += 1;
      }
      // try {
      //   notificationOccurred("success");
      // } catch (er) {
      //   setError(er);
      //   setSomeError(JSON.stringify(er, null, 2));
      // }

      // try {
      //   window.navigator.vibrate(5);
      // } catch (e) {

      // }

      setBlockPositions((prev: any) => [...prev, { x: offsetX, y: offsetY }]);
    }

    setScale(0.95);
    setCountClick((prev) => prev + count);

    const lsDate = localStorage.getItem("date");
    if (!playingGlobal && !lsDate && !playing) {
      setTimeout(() => {
        play();
      }, 500);
    }

    // Возвращаем в базовое состояние через 50 мс
    const id = setTimeout(() => {
      setScale(1);
      clearTimeout(id);
    }, 20);
    const money = localStorage.getItem("money");

    localStorage.setItem("date", `${Date.now()}`);

    if (!money) {
      localStorage.setItem("money", "3");
      window.dispatchEvent(new Event("storage"));
    } else {
      localStorage.setItem("money", `${parseInt(money) + 3}`);
      window.dispatchEvent(new Event("storage"));
    }

    setIsClicked(true);
    if (scaleBLur < 1) {
      setScaleBlur(Math.min(scaleBLur + 0.2, 1)); // Увеличить масштаб при клике, но не более 1
    }

    // setEnergy();
  };

  const muteSound = () => {
    mute(!muted);
  };

  const handleClickBoost = () => {
    navigate("/boosts");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isClicked && scaleBLur > 0.2) {
        setScaleBlur(Math.max(scaleBLur - 0.1, 0.3)); // Сжимать блок, если кликов нет, но не меньше 0.2
      }
    }, 50); // Задержка для сжатия

    return () => clearTimeout(timeout);
  }, [isClicked, scaleBLur]);

  useEffect(() => {
    if (scaleBLur <= 0.2) {
      setIsClicked(false); // Сбросить состояние, если блок сжался
    }
  }, [scaleBLur]);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="text-[15px]">{energy}</div>
          <div className="text-[15px]">+2 / second</div>
        </div>
        <div className="bg-[#AAAAAA] w-full h-[3px] rounded-[10px] overflow-hidden mt-1.5">
          <div className="bg-[#32E55E] h-full w-1/2" />
        </div>
        <div className="text-[15px] text-[#2990FF] flex items-center justify-between">
          <Button
            onClick={muteSound}
            before={<NotificationsIcon />}
            mode="plain"
            size="s"
            className="px-0"
          >
            Mute
          </Button>
          <Button
            onClick={handleClickBoost}
            before={<BoostIcon />}
            mode="plain"
            size="s"
            className="px-0"
          >
            Boost
          </Button>
        </div>
      </div>

      <div
        ref={outerRef}
        className="relative w-auto rounded-[170px] h-[250px] cursor-pointer"
        onTouchStart={handleClick}
      >
        <div
          style={{
            transform: `scale(${scaleBLur})`,
            filter: "blur(5px)",
            width: "200px", // Ширина ограничена 200px
            height: "200px", // Высота ограничена 200px
          }}
          className={
            "overflow-hidden bg-[#B00FB4] transition-[transform 0.2s ease-in-out] absolute"
          }
          // className="bg-[#B00FB4] w-full h-[250px] rounded-[170px] absolute top-0 left-0 blur-[40px]"
        />
        <div className="flex items-center justify-center gap-[10px] rounded-[46px] absolute z-10 left-1/2 -translate-x-1/2 w-full">
          <img
            ref={ref}
            src={crazyFrogImg}
            alt="tonmusic crazy frog"
            className="h-[250px]"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
        {blockPositions.map(({ x, y }: any, index: number) => (
          <div
            key={index}
            className="blocks z-[100] text-2xl"
            style={{ left: x, top: y }}
          >
            +3
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        <Button mode="bezeled" before={<TonIcon />} size="s">
          Ton Music Wave
        </Button>
        <div className="text-[#AAAAAA] text-[10px]">Apache - Bvrnout</div>
      </div>
    </div>
  );
};

export default CrazyFrog;
