import React, { createContext, useEffect, useState } from "react";

export const TitleContext = createContext();
const TitelProvider = ({ children }) => {
  const [title, setTitle] = useState("Home");
  useEffect(() => {
    document.title = title;
  }, [title]);
  const authInfo = {
    title,
    setTitle,
  };
  return (
    <TitleContext.Provider value={authInfo}>{children}</TitleContext.Provider>
  );
};

export default TitelProvider;
