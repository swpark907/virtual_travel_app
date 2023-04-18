import { createContext, useContext } from "react";
import stores from "./stores";

const StoreContext = createContext(stores);

export const useStore = () => useContext(StoreContext);
