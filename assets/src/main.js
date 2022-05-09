// import "core-js";
import { tagolmenu } from "./components/tagolmenu.js";
import { navRender } from "./components/navRender.js";
import { navfix } from "./components/navfix.js";
import { showbasket } from "./components/showbasket.js";
const windowLoad = () => {
  navRender();
  tagolmenu();
  navfix();
  showbasket();
};
windowLoad();
// window.addEventListener("load", () => {

// });
