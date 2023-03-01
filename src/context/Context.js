import CurrencyContextProvider from "./CurrencyContext";
import ThemeContextProvider from "./ThemeContext";

export default function Context({ children }) {
  return (
    <ThemeContextProvider>
      <CurrencyContextProvider>{children}</CurrencyContextProvider>
    </ThemeContextProvider>
  );
}
