import { FC } from "react";
import MusicPlaying from "../components/MusicPlaying";

const PlaylistPage: FC = () => {
  return (
    <div className="h-[calc(100vh-192px)] flex flex-col justify-center">
      <MusicPlaying />
    </div>
  );
};

export default PlaylistPage;
