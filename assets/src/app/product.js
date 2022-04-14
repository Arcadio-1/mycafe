import { windowLoad } from "../main.js";
import { tabsExplore } from "./productIn/tabsExplore.js";
import { plusMin } from "./productIn/quantity.js";
windowLoad();

document.addEventListener("DOMContentLoaded", () => {
  tabsExplore();
  plusMin();
});
