import React, { useMemo, useState } from 'react'
import { productContext } from '../context/productContext'


interface CofePropsType {
   id: number;
   name: string;
   price: number;
   image: string;
   description: string;
   count?: number;
}
export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
   const [selectedProductArr, setSelectedProductArr] = useState<CofePropsType[]>([])
   const value = useMemo(() => ({ selectedProductArr, setSelectedProductArr }), [selectedProductArr])
   console.log(selectedProductArr);
   
   return (
      <productContext.Provider value={value}>{children}</productContext.Provider>
   )
}
