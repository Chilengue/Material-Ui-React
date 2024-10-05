import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppTemeProvider } from "./shared/context";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppTemeProvider>
      <BrowserRouter>
        <MenuLateral>
        <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppTemeProvider>
  );
};
