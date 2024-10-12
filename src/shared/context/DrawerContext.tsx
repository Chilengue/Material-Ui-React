import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerOption{
    icon: string;
    path: string;
    label: string;
}

interface IDrawerContextData{
    isDrawerOpen: boolean;
    isDrawerOpens:IDrawerOption[];
    toggleDrawerOpen: ()=> void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext= ()=>{
    return useContext(DrawerContext);
}

interface  IThemeProviderProps{
    children: React.ReactNode;
}

export const DrawerProvider:React.FC<IThemeProviderProps> =({children}) => {
  const [isDrawerOpen, setIsDrawerName]  = useState(false);
    const [drawerOption, setDrawerOptions]  = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen=useCallback(()=>{
    setIsDrawerName(oldDrawerOpen => !oldDrawerOpen );
  },[]);  



  return(
        <DrawerContext.Provider value={{isDrawerOpen, drawerOption, toggleDrawerOpen}}>
                      {children}    
        </DrawerContext.Provider>
    )
}