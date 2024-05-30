import { FC } from "react";
import ActionCards from "../components/ActionCards";
import MusicPlaying from "../components/MusicPlaying";

const HomePage: FC = () => {
  return (
    <>
      <MusicPlaying />
      <ActionCards />
    </>
  );
};

export default HomePage;
