export const navRender = async () => {
  const navLinkCunt = document.querySelector(".nav2-ul");
  ////
  const getnavLinksJson = async () => {
    const fetchNavLinks = await fetch("./assets/src/json/navLink.json");
    const data = await fetchNavLinks.json();
    return data;
  };
  // console.log(getnavLinksJson);
  const links = await getnavLinksJson();
  links.map((item) => {
    const creatLi = document.createElement("li");
    const { text, link } = item;
    creatLi.innerHTML = `<a href="${link}">${text}</a>`;
    navLinkCunt.appendChild(creatLi);
  });
};
