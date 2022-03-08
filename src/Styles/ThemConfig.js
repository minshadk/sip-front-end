import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Colors = {
  primary: "#333",
  secondary: "#95defb"
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {main:Colors.secondary}
  }
});

export default theme;
