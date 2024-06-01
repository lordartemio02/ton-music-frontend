import { FC } from "react";
import { SliderPointProps } from "./SliderPoint.interfaces";

const SliderPoint: FC<SliderPointProps> = ({ isActive }) => {
  return (
    <div
      className={`w-14 h-1 rounded-[20px] ${
        isActive ? "bg-[#007AFF]" : "bg-[#707579]"
      }`}></div>
  );
};

export default SliderPoint;
