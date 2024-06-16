import { Settings } from "react-slick";
import { IAudioList } from "../../interface/AudioList.interface";

export interface IExploreSlide {
  settings?: Settings;
  data: IAudioList[];
  classNameImg?: string;
  classNameFooter?: string;
}
