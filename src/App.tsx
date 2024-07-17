import { useInitData } from "@tma.js/sdk-react";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useSocketio } from "./hooks/useSocketio";
import { useGetMeQuery } from "./redux/api/auth";
import { onTokenAccess } from "./redux/slices/authSlice";
import { authRoutes, publicRoutes } from "./routers";
import { SocketContext } from "./socket/socket";

const { VITE_APP_BASE_URL_SOCKET: wsUri } = import.meta.env;

const App: FC = () => {
  const isAuth = true;
  const [routs, setRouts] = useState(publicRoutes);
  const dispatch = useDispatch();
  const initData = useInitData();
  const initDataUser = window.Telegram?.WebApp.initData;

  const socket = useSocketio(wsUri, {
    autoConnect: true,
    transports: ["websocket", "polling"],
    query: { initData: initDataUser },
  });

  const { data } = useGetMeQuery();

  useEffect(() => {
    dispatch(onTokenAccess(JSON.stringify(initData)));
    window.onbeforeunload = function () {
      return true;
    };
  }, []);

  useEffect(() => {
    if (!isAuth) {
      setRouts(publicRoutes);
    } else {
      setRouts(authRoutes);
    }
  }, [isAuth]);

  return (
    <SocketContext.Provider value={socket}>
      <Layout>
        <Routes>
          {routs.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              Component={route.component}
            />
          ))}
        </Routes>
      </Layout>
    </SocketContext.Provider>
  );
};

export default App;
