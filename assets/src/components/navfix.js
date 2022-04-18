export const navfix = () => {
  const navbar = document.querySelector(".nav1-continer ");
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight * 2) {
      navbar.classList.add("nav-fix");
    } else {
      navbar.classList.remove("nav-fix");
    }
  });
};
