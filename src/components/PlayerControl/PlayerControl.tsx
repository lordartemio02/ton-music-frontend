import { useTWAEvent } from "@tonsolutions/telemetree-react";
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

  const eventBuilder = useTWAEvent();

  const onClickPlayButton = () => {
    if (!playing) {
      eventBuilder.track("Start music from full player", {
        label: "Start music from full player", // Additional info about the button
        category: "Start music", // Categorize the event
      });
    }
    togglePlayPause();
  };

  return (
    <div className="flex items-center justify-center gap-8">
      <SkipBackIcon className="cursor-pointer" onClick={pnPerv} />
      <div onClick={onClickPlayButton} className="cursor-pointer">
        {playing ? <PauseCircleIcon /> : <PlayCircleIcon />}
      </div>
      <SkipFwdIcon className="cursor-pointer" onClick={onNext} />
    </div>
  );
};

export default PlayerControl;
