import { FC, useCallback } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { PauseIcon, PlayIcon } from "../../assets/icons";
import { useAudioTime } from "../../hooks/useAudioTime";

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import ProgressBar from "../ProgressBar";

const ControlMusicPanel: FC = () => {
  const navigate = useNavigate();

  const currentMusic = useAppSelector((state) => state.music.currentMusic);

  const time = useAudioTime();
  const { togglePlayPause, seek, playing, duration } = useGlobalAudioPlayer();

  const handleClickGlobalPlayer = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate("/player");
  };

  const onChangeRate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      seek(parseInt(event.target.value, 10));
    },
    [seek]
  );

  const handleTogglePlayPause = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      togglePlayPause();
    },
    [togglePlayPause]
  );

  return (
    <div
      className="relative rounded-lg p-2 bg-[#161A1D] flex items-center justify-between"
      onClick={handleClickGlobalPlayer}
    >
      <div className="absolute -top-4 left-0 w-full px-[13px]">
        <ProgressBar
          min={0}
          value={time}
          max={duration}
          onChange={onChangeRate}
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="w-[35px] h-[35px] rounded-[4px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={`/images/${currentMusic.img}.png`}
            alt={`${currentMusic.name}-${currentMusic.artist}`}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-white">{currentMusic.name}</div>
          <div className="font-semibold text-[#858584]">
            {currentMusic.artist}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer" onClick={handleTogglePlayPause}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </div>
      </div>
    </div>
  );
};

export default ControlMusicPanel;
