import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: deepOrange,
  },
});

export default theme;
