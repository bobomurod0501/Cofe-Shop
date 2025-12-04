import React, { useState } from 'react'
import { authContext } from '../context/authContext'
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
   const token = localStorage.getItem("access_token");
   const isValid = Boolean(token)
   console.log(isValid)
   const [isAuth, setIsAuth] = useState(isValid)
   return (
      <authContext.Provider value={{ isAuth, setIsAuth }}>
         {children}
      </authContext.Provider>
   )
}
