import { useInitData } from "@tma.js/sdk-react";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { onTokenAccess } from "./redux/slices/authSlice";
import { authRoutes, publicRoutes } from "./routers";

const App: FC = () => {
  const isAuth = true;
  const [routs, setRouts] = useState(publicRoutes);
  const dispatch = useDispatch();
  const initData = useInitData();

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
  );
};

export default App;
