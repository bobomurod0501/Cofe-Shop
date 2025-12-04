import { createContext, useContext } from "react";
interface StateValuesType {
   searchVal:string,
   setSearchVal:(val:string) => void
}
const StateValuesContext = createContext<StateValuesType>({
  searchVal: "",
  setSearchVal:() => {
   // 
  }
});

const useStateValuesContext = () => {
   return useContext(StateValuesContext)
}

export {useStateValuesContext, StateValuesContext}