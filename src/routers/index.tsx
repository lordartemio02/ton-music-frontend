import {
  ErrorPage,
  HomePage,
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
  ...errorRoutes,
];

export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  ...errorRoutes,
];
