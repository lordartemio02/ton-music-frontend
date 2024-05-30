import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { authRoutes, publicRoutes } from "./routers";

const App: FC = () => {
  const isAuth = true;
  const [routs, setRouts] = useState(publicRoutes);

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
