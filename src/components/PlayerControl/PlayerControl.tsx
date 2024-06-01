import { FC } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import {
  PauseCircleIcon,
  PlayCircleIcon,
  SkipBackIcon,
  SkipFwdIcon,
} from "../../assets/icons";
import { IPlayerControl } from "./PlayerControl.interface";

const PlayerControl: FC<IPlayerControl> = ({ pnPerv, onNext }) => {
  const { togglePlayPause, playing } = useGlobalAudioPlayer();

  return (
    <div className="flex items-center justify-center gap-8">
      <SkipBackIcon className="cursor-pointer" onClick={pnPerv} />
      <div onClick={togglePlayPause} className="cursor-pointer">
        {playing ? <PauseCircleIcon /> : <PlayCircleIcon />}
      </div>
      <SkipFwdIcon className="cursor-pointer" onClick={onNext} />
    </div>
  );
};

export default PlayerControl;
