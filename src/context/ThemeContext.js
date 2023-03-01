import { ThemeProvider, createTheme } from "@mui/material";
import COLORS from "../variables/colors.json";
const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_1,
    },
    secondary: {
      main: COLORS.ACCENT_1,
    },
    error: {
      main: COLORS.ERROR_COLOR,
    },
    success: {
      main: COLORS.SUCCESS,
    },
  },
});

export default function ThemeContextProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
