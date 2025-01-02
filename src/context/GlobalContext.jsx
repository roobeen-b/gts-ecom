/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <GlobalContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
