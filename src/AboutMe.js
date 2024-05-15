import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";

function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" sx={{ flex: 1, marginBottom: 4, paddingTop: 4 }}>
        About Me
      </Typography>
      <Typography variant="body1">
        Hi there! I'm Nathaniel (my friends call me Nate) - a software engineer
        and avid runner. I'm passionate about building elegant and efficient
        solutions to problems with software. I have a special interest in
        Machine Learning and AI, as most engineers do these days, but I have the
        most fun creating software that make peoples lives easier. In my free
        time, I can mostly be found running, playing a puzzle game, or
        programming some side project. pushing my limits on the track. This is
        my personal space where I share my thoughts, projects, and experiences.
      </Typography>
    </ThemeProvider>
  );
}

export default AboutMe;
