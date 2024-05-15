import React from "react";
import { Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";

function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <Typography variant="h6" color={theme.palette.text.secondary}>
          Recently... I wanted to see how big this would get does it get bigger
          than this?
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default Sidebar;
