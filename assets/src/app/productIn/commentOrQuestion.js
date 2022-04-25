export const commentOrQuestion = () => {
  const allTitles = document.querySelectorAll(".cq-tab");
  const allTabs = document.querySelectorAll(".cq-down-tab");
  allTitles.forEach((title) => {
    title.addEventListener("click", (e) => {
      const tgt = e.currentTarget;
      allTitles.forEach((tit) => {
        tit.classList.remove("p-down-active-tab");
      });
      tgt.classList.add("p-down-active-tab");
      allTabs.forEach((tab) => {
        tab.classList.remove("active-display");
        if (tab.dataset.tab == tgt.dataset.tab) {
          tab.classList.add("active-display");
        }
      });
    });
  });
};
