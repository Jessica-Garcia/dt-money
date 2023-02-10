import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Router } from "./Router";
import { TransactionsProvider } from "./contexts/TransactionsContext";
export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
