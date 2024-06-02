import { FC } from "react";
import "swiper/css";
import CrazyFrog from "../components/CrazyFrog";

const HomePage: FC = () => {
  return (
    <div className="h-[calc(100vh-192px)] flex flex-col justify-center">
      <CrazyFrog />
    </div>
  );
};

export default HomePage;
