import { createContext, useContext } from "react";

interface CofePropsType {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  count?: number;
}
interface ProductContextType {
  selectedProductArr: CofePropsType[];
  setSelectedProductArr: (arr: CofePropsType[]) => void;
}
const productContext = createContext<ProductContextType>({
  selectedProductArr: [],
  setSelectedProductArr: () => {
    //
  },
});

const useProductContext = () => {
  return useContext(productContext);
};

export { productContext, useProductContext };
