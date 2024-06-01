import { FC } from "react";
import { Swiper } from "swiper/react";
import { SliderProps } from "./Slider.interfaces";

const Slider: FC<SliderProps> = (props) => {
  const { children, onChange } = props;
  return (
    <Swiper onSlideChange={onChange} className="w-screen h-screen">
      {children}
    </Swiper>
  );
};

export default Slider;
