import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: ()=> void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext= ()=>{
    return useContext(DrawerContext);
}

interface  IThemeProviderProps{
    children: React.ReactNode;
}

export const DrawerProvider:React.FC<IThemeProviderProps> =({children}) => {
  const [isDrawerOpen, setIsDrawerName]  = useState(false);

  const toggleDrawerOpen=useCallback(()=>{
    setIsDrawerName(oldDrawerOpen => !oldDrawerOpen );
  },[]);  



  return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
                      {children}    
        </DrawerContext.Provider>
    )
}