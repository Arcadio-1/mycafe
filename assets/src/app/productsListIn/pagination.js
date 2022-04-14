import fetchProdList from "./fetchProdList";

export const pagination = async () => {
  const products = await fetchProdList();
  const perPage = 16;
  const pageNum = Math.ceil(products.length / perPage);
  const newprod = Array.from({ length: pageNum }, (_, index) => {
    let start = index * perPage;
    return products.slice(start, start + perPage);
  });
  // console.log(newprod);
  return newprod;
};

// export const rty = pagination();
