import { getAllCofeProducts } from "../services/getAllCofeProducts";

export const getAllCofeProductQuery = ({
   queryKey:["cofe"],
   queryFn:async () => getAllCofeProducts()
})