import { useBackButton } from "@tma.js/sdk-react";
import { FC, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { authRoutes, publicRoutes } from "./routers";

const App: FC = () => {
  const isAuth = true;
  const [routs, setRouts] = useState(publicRoutes);

  const bb = useBackButton();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const rx = new RegExp(/player$/, "i");
    if (bb && rx.test(location.pathname)) {
      bb.show();
      bb.on("click", () => {
        navigate(-1);
      });
    } else {
      bb.hide();
    }
  }, [bb, location.pathname, navigate]);

  useEffect(() => {
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
