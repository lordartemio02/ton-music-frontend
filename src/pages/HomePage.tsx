import { FC } from "react";
import "swiper/css";
import ActionCards from "../components/ActionCards";
import CrazyFrog from "../components/CrazyFrog";

const HomePage: FC = () => {
  return (
    <>
      <CrazyFrog />
      <ActionCards />
    </>
  );
};

export default HomePage;
