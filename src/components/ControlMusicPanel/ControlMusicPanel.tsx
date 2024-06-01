import { FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { PauseIcon, PlayIcon } from "../../assets/icons";
import { useAudioTime } from "../../hooks/useAudioTime";
import ProgressBar from "../ProgressBar";
import { IControlMusicPanel } from "./ControlMusicPanel.interface";

const ControlMusicPanel: FC<IControlMusicPanel> = ({
  name,
  artist,
  img,
  src,
}) => {
  const time = useAudioTime();
  const { load, togglePlayPause, seek, playing, duration } =
    useGlobalAudioPlayer();

  const navigate = useNavigate();

  useEffect(() => {
    load(src, {
      autoplay: false,
      html5: true,
      format: "mp3",
    });
  }, [load, src]);

  const onChangeRate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      seek(parseInt(event.target.value, 10));
    },
    [seek]
  );

  const handleTogglePlayPause = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    togglePlayPause();
  };

  return (
    <div
      className="relative rounded-lg p-2 bg-[#161A1D] flex items-center justify-between"
      onClick={() => navigate("/player")}
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
            src={img}
            alt={`${name}-${artist}`}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-white">{name}</div>
          <div className="font-semibold text-[#858584]">{artist}</div>
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
