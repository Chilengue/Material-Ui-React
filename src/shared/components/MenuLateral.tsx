import { Box, Drawer, useTheme } from "@mui/material";

interface IMenuLateral{
    children:React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({children}) => {
    const theme=useTheme();
  return (
   <>
    <Drawer variant="permanent">
      Tetse
    </Drawer>
    <Box  height="100vh" marginLeft={theme.spacing(28)}>
        {children}
        </Box>
    </>
  );
};
