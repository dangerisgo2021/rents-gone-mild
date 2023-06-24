import { useContext } from "react";
import { storeContext } from "../components/store-provider.js";
import { store } from "../store.js";

export const useStore = () => {
  const { subscribe, dispatch } = store;
  const state = useContext(storeContext);
  return {
    subscribe: (sub) => subscribe(sub),
    getState: (selector) => (selector ? selector(state) : state),
    dispatch: (action) => {
      console.info({ action, curState: state });
      const newState = dispatch(action);
      console.info({ action, newState });
    },
  };
};