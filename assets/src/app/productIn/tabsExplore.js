export function tabsExplore() {
  const allTitles = document.querySelectorAll(".p-down-title");
  const allTabs = document.querySelectorAll(".down-tab");
  allTitles.forEach((title) => {
    title.addEventListener("click", (e) => {
      const tgt = e.currentTarget;
      allTitles.forEach((tit) => {
        tit.classList.remove("p-down-active-tab");
      });
      tgt.classList.add("p-down-active-tab");
      allTabs.forEach((tab) => {
        tab.classList.remove("active-display");
        if (tab.dataset.tab == tgt.dataset.forTab) {
          tab.classList.add("active-display");
        }
      });
    });
  });
}
