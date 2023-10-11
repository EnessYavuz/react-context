import { createContext,useState } from "react";

export const Context = createContext();

const SideProvider = ({children}) => {

    const [theme, setTheme] = useState("blue")
    const [language, setlanguage] = useState("tr")
  
    const data={
      theme,
      setTheme,
      language,
      setlanguage
    }

  return (
  <>
  <Context.Provider value={data}>
    {children}
  </Context.Provider>
 
  </>);
};

export default SideProvider;
