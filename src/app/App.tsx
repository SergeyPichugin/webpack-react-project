import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { classNames } from "shared/config/lib/classNames/classNames";
import { useTheme } from "./provaiders/ThemeProvaider";
import { AppRouter } from "./provaiders/router";
import { NavBar } from "widgets/NavBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <h1>App</h1>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
