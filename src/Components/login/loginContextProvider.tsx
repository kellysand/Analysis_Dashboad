import React from 'react'
import{ createContext, useContext, useState } from "react";

type UserContextType = {
  userName: string | null;
  setUserName: (name: string | null) => void;
};

export const UserContext = createContext<UserContextType>({
  userName: null,
  setUserName: () => {},
});

type LoginContextProviderProps = {
  children: React.ReactNode;
};


function LoginContextProvider({children}:LoginContextProviderProps) {
   const [userName, setUserName] = useState<string | null>(null);

 
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}


export default LoginContextProvider
