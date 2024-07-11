import { NavIcons } from "../../assets/icons";

export const navigationList = [
  {
    Img: NavIcons.GlobeIcon,
    title: "Home",
    path: "/",
  },
  {
    Img: NavIcons.ExploreIcon,
    title: "Explore",
    path: "/explore",
    disabled: true,
  },
  {
    Img: NavIcons.LightBulbIcon,
    title: "Earn",
    path: "/boosts",
  },
  {
    Img: NavIcons.SearchIcon,
    title: "Search",
    path: "/search",
    disabled: true,
  },
  {
    Img: NavIcons.FolderIcon,
    title: "Playlist",
    path: "/playlist",
  },
];
