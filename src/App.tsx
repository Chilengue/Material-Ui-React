import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppTemeProvider, DrawerProvider } from "./shared/context";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppTemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppTemeProvider>
  );
};
