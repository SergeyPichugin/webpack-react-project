import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvaider } from "app/provaiders/ThemeProvaider";
import App from "app/App";

render(
  <BrowserRouter>
    <ThemeProvaider>
      <App />
    </ThemeProvaider>
  </BrowserRouter>,
  document.getElementById("root")
);
