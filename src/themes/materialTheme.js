import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#d8e1ed",
    },
    white: { main: "#fff" },
    blue: { main: "#c4ddff" },
    accent2: { main: "#fde2c4" },
    black: { main: "#000a10" },
    error: { main: "#EF9595" },
  },
  typography: {
    fontFamily: "Nunito",
    fontWeightBold: 700,
  },
});

export default theme;
