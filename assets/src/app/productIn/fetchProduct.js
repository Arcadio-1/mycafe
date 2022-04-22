import fetchProdList from "../../components/fetchProdList";
export const fetchProduct = async (id = "d1") => {
  const products = await fetchProdList();
  const thisprod = products.find((prod) => {
    if (prod.id == id) {
      return prod;
    }
  });
  return thisprod;
};
