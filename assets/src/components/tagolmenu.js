export const tagolmenu = () => {
  const menuBtn = document.getElementById("menu");
  const menuLinks = document.querySelector(".nav2-ul");
  const menuLinksContiner = document.querySelector(".nav-ul-container");
  const header = document.querySelector("header");
  let tog = false;
  menuBtn.addEventListener("click", () => {
    console.log(menuLinksContiner);
    const position = menuLinks.getBoundingClientRect();
    if (!tog) {
      tog = true;
      menuLinksContiner.style.height = `${position.height}px`;
      header.style.height = `${position.height}px`;
      return;
    } else if (tog) {
      tog = false;
      menuLinksContiner.style.height = "0px";
      header.style.height = `0px`;
      return;
    }
  });
  window.addEventListener(
    "resize",
    () => {
      const linkContainerClientRect = menuLinksContiner.getBoundingClientRect();
      if (linkContainerClientRect.width > 830) {
        header.style.height = `auto`;
        return (menuLinksContiner.style.height = "25px");
      } else if (linkContainerClientRect.width < 880) {
        tog = false;
        menuLinksContiner.style.height = "0px";
        header.style.height = `0px`;
        return;
      }
    },
    true
  );
};
