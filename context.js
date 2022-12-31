import { createContext, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  return <Context.Provider value={"hello"}>{children}</Context.Provider>;
};

// const globalHook = () => {
//   return useContext(Context);
// };

export { Provider, Context };
