export function tabsExplore() {
  const btns = document.querySelectorAll(".p-down-title");
  const tabs = document.querySelectorAll(".down-tab");
  document.querySelectorAll(".p-down-title").forEach((btns) => {
    btns.addEventListener("click", () => {
      const downTitle = btns.parentElement;
      const PDown = downTitle.parentElement;
      const TabNum = btns.dataset.forTab;
      const TabAct = PDown.querySelector(`.down-tab[data-tab="${TabNum}"]`);

      downTitle.querySelectorAll(".p-down-title").forEach((btns) => {
        btns.classList.remove("p-down-active-tab");
      });
      PDown.querySelectorAll(".down-tab").forEach((tabs) => {
        tabs.classList.remove("active-display");
      });
      btns.classList.add("p-down-active-tab");
      TabAct.classList.add("active-display");
    });
  });
}
