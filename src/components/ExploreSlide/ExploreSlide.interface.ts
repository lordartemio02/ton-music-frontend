import { Settings } from "react-slick";
import { IAudioList } from "../../interfaces/AudioList.interface";

export interface IExploreSlide {
  settings?: Settings;
  data: IAudioList[];
  classNameImg?: string;
  classNameFooter?: string;
}
