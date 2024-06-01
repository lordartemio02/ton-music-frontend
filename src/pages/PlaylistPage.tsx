import { FC } from "react";
import ActionCards from "../components/ActionCards";
import MusicPlaying from "../components/MusicPlaying";

const PlaylistPage: FC = () => {
  return (
    <>
      <MusicPlaying />
      <ActionCards />
    </>
  );
};

export default PlaylistPage;
