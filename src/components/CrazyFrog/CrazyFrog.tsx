import { FC, useEffect, useRef, useState } from "react";

import { CrazyFrogIcon } from "../../assets/icons";
import "./style.css";

import { useHapticFeedback } from "@tma.js/sdk-react";
import { useAudioPlayer, useGlobalAudioPlayer } from "react-use-audio-player";
import data from "../../mock/audiolist.json";

const CrazyFrog: FC = () => {
  const [scale, setScale] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const { supports, impactOccurred } = useHapticFeedback();

  const outerRef = useRef(null);

  const [blockPositions, setBlockPositions] = useState<any>([]);

  const [visible, setVisible] = useState(0);

  const { playing: playingGlobal } = useGlobalAudioPlayer();

  const { playing, load, play, pause, mute, muted } = useAudioPlayer();

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
      }

      setBlockPositions((prev: any) => [...prev, { x: offsetX, y: offsetY }]);
    }

    setScale(0.95);

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
  };

  const muteSound = () => {
    mute(!muted);
    if (supports("impactOccurred")) {
      impactOccurred("light");
    }
  };

  return (
    <div>
      <div className="flex flex-row" onClick={muteSound}>
        mute
      </div>
      <div
        ref={outerRef}
        className="relative w-auto rounded-[170px] h-[250px] cursor-pointer"
        // onClick={handleClick}
        onTouchStart={handleClick}>
        <div className="bg-[#B00FB4] w-full h-[250px] rounded-[170px] absolute top-0 left-0 blur-[40px]" />
        <div className="flex items-center justify-center gap-[10px] rounded-[46px] absolute z-10 left-1/2 -translate-x-1/2 w-full">
          <CrazyFrogIcon
            ref={ref}
            style={{ transform: `scale(${scale})` }}
            className="w-full"
          />
        </div>
        {blockPositions.map(({ x, y }: any, index: number) => (
          <div
            key={index}
            className="blocks z-[100] text-2xl"
            style={{ left: x, top: y }}>
            +3
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrazyFrog;
