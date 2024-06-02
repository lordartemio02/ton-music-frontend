import { FC, useEffect, useRef, useState } from "react";

import { CrazyFrogIcon } from "../../assets/icons";
import "./style.css";

const CrazyFrog: FC = () => {
  const [scale, setScale] = useState(1);
  const ref = useRef(null);

  const [blockPositions, setBlockPositions] = useState<any>([]);

  const [visible, setVisible] = useState(0);

  // const { playing: playingGlobal } = useGlobalAudioPlayer();

  // const { pause, playing, load, play } = useAudioPlayer();

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

  // useEffect(() => {
  //   localStorage.removeItem("date");
  // }, []);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     const lsDate = localStorage.getItem("date");
  //     console.log(playing);
  //     console.log(playingGlobal);
  //     if (!playingGlobal && lsDate && !playing) {
  //       console.log("here");

  //       play();
  //     }
  //     if (lsDate && playing) {
  //       const date = Date.now();
  //       const differenceInMillis = Math.abs(date - parseInt(lsDate));

  //       // Преобразуем разницу в миллисекундах в секунды
  //       const differenceInSeconds = differenceInMillis / 1000;
  //       if (differenceInSeconds > 3) {
  //         pause();
  //         localStorage.removeItem("date");
  //       }
  //     }
  //   }, 3000);

  //   return () => clearInterval(id);
  // }, []);

  const handleClick = (e: any) => {
    setVisible((prevVisible) => prevVisible + 1);
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setScale(0.95);

    // localStorage.setItem("date", `${Date.now()}`);

    // Возвращаем в базовое состояние через 50 мс
    setTimeout(() => setScale(1), 50);
    const money = localStorage.getItem("money");

    // if (!playing) {
    //   load(data[1].link, {
    //     autoplay: false,
    //     html5: true,
    //     format: "mp3",
    //   });
    //   localStorage.setItem("audioIndex", "1");
    // }
    if (!money) {
      localStorage.setItem("money", "3");
      window.dispatchEvent(new Event("storage"));
    } else {
      localStorage.setItem("money", `${parseInt(money) + 3}`);
      window.dispatchEvent(new Event("storage"));
    }

    setBlockPositions((prev: any) => [...prev, { x, y }]);
  };

  return (
    <div
      className="relative w-auto rounded-[170px] h-[250px] cursor-pointer"
      onClick={handleClick}>
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
  );
};

export default CrazyFrog;
