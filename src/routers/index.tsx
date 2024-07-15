import {
  ArtistPage,
  BoostsPage,
  EarnPage,
  ErrorPage,
  ExplorePage,
  HomePage,
  PlayerPage,
  PlaylistPage,
  SearchPage,
  TasksPage,
} from "../pages";

const errorRoutes = [
  {
    path: "*",
    component: ErrorPage,
  },
];

export const authRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "search",
    component: SearchPage,
  },
  {
    path: "tasks",
    component: TasksPage,
  },
  {
    path: "playlist",
    component: PlaylistPage,
  },
  {
    path: "explore",
    component: ExplorePage,
  },
  {
    path: "earn",
    component: EarnPage,
  },
  {
    path: "artist",
    component: ArtistPage,
  },
  {
    path: "player",
    component: PlayerPage,
  },
  {
    path: "boosts",
    component: BoostsPage,
  },
  ...errorRoutes,
];

export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  ...errorRoutes,
];
