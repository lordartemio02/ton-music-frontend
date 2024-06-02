import { FC } from "react";

import { useGlobalAudioPlayer } from "react-use-audio-player";
import pauseImg from "../../assets/imgs/pause.png";
import playImg from "../../assets/imgs/play.png";

const MusicPlaying: FC = () => {
  const { togglePlayPause, playing } = useGlobalAudioPlayer();

  return (
    <div
      className="relative mx-auto w-fit rounded-[170px] my-[100px] cursor-pointer"
      onClick={togglePlayPause}>
      <div className="bg-[#B00FB4] w-[280px] h-[170px] rounded-[170px] absolute -top-[60px] -left-1/2 translate-x-[20px] blur-[40px]" />
      <div className="bg-[#EFEFF4]/60 flex items-center gap-[10px] px-[22px] py-[18px] rounded-[46px] relative z-10">
        <div className="pr-[40px] text-black uppercase font-bold">PUSH ME</div>
        <div className="w-[84px] h-[84px] absolute top-1/2 -translate-y-1/2 -right-[25px]">
          <img
            src={playing ? pauseImg : playImg}
            alt="play"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-[#A2ACB0] text-[13px] text-center sticky">
        ...and listen
      </div>
    </div>
  );
};

export default MusicPlaying;
