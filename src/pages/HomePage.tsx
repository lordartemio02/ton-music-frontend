import { FC } from "react";
import CrazyFrog from "../components/CrazyFrog";
import "./index.css";

const HomePage: FC = () => {
  return (
    <div className="h-[calc(100vh-192px)] flex flex-col justify-center">
      <CrazyFrog />
    </div>
  );
};

export default HomePage;
