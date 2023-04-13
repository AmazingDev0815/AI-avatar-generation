import { createContext, useContext, useState } from "react";

const ImageDialogContext = createContext({ props: {}, setProps: () => {} });

export const ImageDialogContextProvider = ({ children }) => {
  const [props, setProps] = useState({open: false, name:"", index: 0});
  return (
    <ImageDialogContext.Provider value={{ props, setProps }}>
      {children}
    </ImageDialogContext.Provider>
  );
};

export const useImageDialogContext = () => useContext(ImageDialogContext);
