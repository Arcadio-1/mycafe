const menuBtn = document.getElementById("hamberger-menu");
const menuLinks = document.querySelector(".nav2-ul");
const menuLinksContiner = document.querySelector(".nav-ul-container");
let tog = false;
export const tagolmenu = () => {
  menuBtn.addEventListener("click", () => {
    console.log(menuLinksContiner);
    const position = menuLinks.getBoundingClientRect();
    console.log(tog);

    // menuLinksContiner.classList.toggle("display-flex");
    if (!tog) {
      tog = true;
      return (menuLinksContiner.style.height = `${position.height}px`);
    } else if (tog) {
      tog = false;
      return (menuLinksContiner.style.height = "0px");
    }
    console.log(tog);
  });
  window.addEventListener(
    "resize",
    () => {
      console.log("fuck");
      const linkContainerClientRect = menuLinksContiner.getBoundingClientRect();
      if (linkContainerClientRect.width > 830) {
        return (menuLinksContiner.style.height = "25px");
      } else if (linkContainerClientRect.width < 880) {
        tog = false;
        return (menuLinksContiner.style.height = "0px");
      }
    },
    true
  );
};
