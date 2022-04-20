export const getcooki = () => {
  let cook = document.cookie.split(";");
  const lenth = cook.length - 1;
  return cook[lenth];
};
