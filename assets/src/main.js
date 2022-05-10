// import "core-js";
import { navRender } from "./components/navRender.js";
import { renderFooter } from "./components/footer";
const windowLoad = () => {
  navRender();
  renderFooter();
};

windowLoad();
// window.addEventListener("load", () => {

// });
