import { tagolmenu } from "./components/tagolmenu.js";
import { navRender } from "./components/navRender.js";

export const windowLoad = () => {
  tagolmenu();
  navRender();
};
// window.addEventListener("load", () => {

// });
