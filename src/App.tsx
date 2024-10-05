import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppTemeProvider } from "./shared/context";

export const App = () => {
  return (
    <AppTemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppTemeProvider>
  );
};
