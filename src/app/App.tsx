import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/config/lib/classNames/classNames";
import { useTheme } from "./provaiders/ThemeProvaider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toogleTheme}>Toogle Theme</button>
      <h1>App</h1>
      <Link to={"/"}>Главная</Link> | <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
