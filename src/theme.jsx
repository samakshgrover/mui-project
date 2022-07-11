import { createTheme } from "@mui/material/styles";

const archOrange = "#ffba60";
const archBlue = "#0b72b9";

const theme = createTheme({
  palette: {
    common: {
      blue: `${archBlue}`,
      orange: `${archOrange}`,
    },
    primary: {
      main: `${archBlue}`,
    },
    secondary: {
      main: `${archOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    tab: {
      fontFamily: "Raleways sans-sarif",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1.1rem",
      color: "#fff",
    },
    estimate: {
      fontSize: "1rem",
      fontFamily: "Pacifico",
      textTransform: "none",
      height: "45px",
      color: "#fff",
    },
  },
});

export default theme;
