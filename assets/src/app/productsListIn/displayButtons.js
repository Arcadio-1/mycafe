export const displayButtons = async (btnContainer, prodList) => {
  let HTbtn = [];
  // console.log(prodList);
  for (let i = 0; i < prodList.length; i++) {
    HTbtn.push(
      `<button type="button" data-id = "${i}" class="page-num-btn">${
        i + 1
      }</button>`
    );
  }
  HTbtn.unshift(
    '<button type="button" class="prev-btn"><i class="fa-solid fa-angle-right"></i></button>'
  );
  HTbtn.push(
    '<button type="button" class="next-btn"><i class="fa-solid fa-angle-left"></i></button>'
  );
  btnContainer.innerHTML = HTbtn.join("");
};
