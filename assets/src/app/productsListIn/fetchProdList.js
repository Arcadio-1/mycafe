const fetchProdList = async () => {
  const prodListJ = await fetch("./assets/src/json/productList.json");
  const prodList = await prodListJ.json();
  //   console.log(prodList);
  return prodList;
};

export default fetchProdList;
