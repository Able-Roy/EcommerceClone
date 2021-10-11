import React, { createContext, useState } from "react";

export const Context = createContext();
const Hoc = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={(cart, setCart)}>
      {props.children}
    </Context.Provider>
  );
};
export default Hoc;
