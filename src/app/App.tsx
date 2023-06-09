import "./styles/index.scss";
import { classNames } from "shared/config/lib/classNames/classNames";
import { useTheme } from "./provaiders/ThemeProvaider";
import { AppRouter } from "./provaiders/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={""}>
        <NavBar />
        <div className={"content-page"}>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
