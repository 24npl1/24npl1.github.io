import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66CC99", // Green
    },
    secondary: {
      main: "#A2393D", // Rust
    },
    background: {
      default: "#004953", // Set the background color
      secondary: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF", // Set the text color to white
      secondary: "#004953",
    },
  },
  typography: {
    fontFamily: '"Nova Mono", monospace', // Set Nova Mono as the default font
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    // Add more typography styles as needed
  },
});

export default theme;
