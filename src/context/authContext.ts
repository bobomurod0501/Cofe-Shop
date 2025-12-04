import { createContext, useContext } from "react";
interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
}

const authContext = createContext<AuthContextType>({
  isAuth:true,
  setIsAuth:() => {
   //
  },
});

const useAuthContext = () => {
   return useContext(authContext)
}

export {useAuthContext, authContext}