import { useEffect, useState } from "react";
import { createContext } from "react";
import { store } from "../store.js";

export const storeContext = createContext(store.getState());

export const StoreProvider = ({ children }) => {
  const [actionCount, setActionCount] = useState(0);
  const state = store.getState();
  console.log({ actionCount })
  useEffect(() => {
    const unsub = store.subscribe(() => {
      setActionCount((value) => value + 1);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <storeContext.Provider value={state}>{children}</storeContext.Provider>
  );
};
