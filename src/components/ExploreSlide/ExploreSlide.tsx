import { FC } from "react";
import Slider, { Settings } from "react-slick";
import { SLICK_SETTINGS } from "../../config";
import { IExploreSlide } from "./ExploreSlide.interface";

const ExploreSlide: FC<IExploreSlide> = ({
  settings,
  data,
  classNameImg,
  classNameFooter,
}) => {
  const defaultSettings: Settings = {
    ...SLICK_SETTINGS,
    ...settings,
  };

  return (
    <Slider {...defaultSettings}>
      {data.map((item) => (
        <div key={item.id} className="p-1.5">
          <img
            src={`/images/${item.img}.png`}
            alt={`${item.artist} ${item.name}`}
            className={`w-full h-full object-cover ${classNameImg}`}
          />
          <div className={`px-5 pt-4 pb-5 bg-[#383838]/85 ${classNameFooter}`}>
            <div className="text-white uppercase text-[17px] font-semibold">
              {item.artist}
            </div>
            <div className="text-[#707579] uppercase text-[15px]">
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ExploreSlide;
