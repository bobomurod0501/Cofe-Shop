import { getAllCofeProducts } from "../services/getAllCofeProducts";
import { getAllCookieProducts } from "../services/getAllCookieProducts";

export const getAllCofeProductQuery = ({
   queryKey:["cofe"],
   queryFn:async () => getAllCofeProducts()
})
export const getAllcookieProductQuery = {
  queryKey: ["cookie"],
  queryFn: async () => getAllCookieProducts(),
};