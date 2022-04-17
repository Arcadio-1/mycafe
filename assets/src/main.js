import { tagolmenu } from "./components/tagolmenu.js";
import { navRender } from "./components/navRender.js";
const windowLoad = () => {
  navRender();
  tagolmenu();
};
windowLoad();
// window.addEventListener("load", () => {

// });
