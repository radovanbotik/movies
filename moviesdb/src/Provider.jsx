import React from "react";
import { useState, useEffect, useContext } from "react";
import useFetch from "./useFetch";

const ACCESS = import.meta.env.VITE_ACCESS;
const AppContext = React.createContext();
let ENDPOINT = `http://www.omdbapi.com/?apikey=${ACCESS}`;

function Provider({ children }) {
  const [query, setQuery] = useState("batman");
  const { loading, error, data } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ loading, data, error, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Provider, useGlobalContext, ACCESS, ENDPOINT };
