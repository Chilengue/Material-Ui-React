import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme, DarkTheme } from "../themes";
import { Box, ThemeProvider } from "@mui/material";

interface IThemeConextData{
    themeName: 'light'  | 'dark';
    toggleTheme: ()=> void;
}

const ThemeContext = createContext({} as IThemeConextData);

export const useAppThemeContext= ()=>{
    return useContext(ThemeContext);
}

interface  IThemeProviderProps{
    children: React.ReactNode;
}

export const AppTemeProvider:React.FC<IThemeProviderProps> =({children}) => {
  const [themeName, setThemeName]  = useState<'light'  | 'dark'>('light');

  const toggleTheme=useCallback(()=>{
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  },[]);  

  const theme = useMemo(()=>{
    if (themeName=== 'light') return LightTheme;
     return DarkTheme;
  }, [themeName]);

  return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={DarkTheme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                      {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}