export const explorImg = () => {
  const container = document.querySelector(".p-main-slider");
  const nextbtn = document.getElementById("next-img-btn");
  const prevbtn = document.getElementById("prev-img-btn");

  prevbtn.addEventListener("click", () => {
    sliding("prev");
  });
  nextbtn.addEventListener("click", () => {
    sliding();
  });

  const sliding = (type) => {
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");
    let next = active.nextElementSibling;

    if (!next) {
      next = container.firstElementChild;
    }

    active.classList.remove("active");
    last.classList.remove("last");

    if (type == "prev") {
      active.classList.add("next");
      last.classList.add("active");
      next = last.previousElementSibling;
      if (!next) {
        container.lastElementChild.classList.remove("next");
        container.lastElementChild.classList.add("last");
        return;
      }
      next.classList.remove("next");
      next.classList.add("last");
      return;
    }

    next.classList.remove("next");
    next.classList.add("active");
    active.classList.add("last");
    last.classList.add("next");
  };
};
