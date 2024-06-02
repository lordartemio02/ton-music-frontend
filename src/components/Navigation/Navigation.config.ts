import {
  PlaylistIcon,
  SearchIcon,
  SongIcon,
  TasksIcon,
} from "../../assets/icons";

export const navigationList = [
  {
    Img: SongIcon,
    title: "Home",
    path: "/",
  },
  {
    Img: PlaylistIcon,
    title: "Playlist",
    path: "/playlist",
  },
  {
    Img: TasksIcon,
    title: "Tasks",
    path: "/tasks",
  },
  {
    Img: SearchIcon,
    title: "Search",
    path: "/search",
    disabled: true,
  },
];
