import React from "react";
import Header from "./Header"; // Update the path to your Header component
import Footer from "./Footer"; // Update the path to your Footer component
import ProjectsGrid from "./ProjectsGrid"; // Update the path to your ProjectsGrid component
import theme from "./theme";
import { ThemeProvider } from "@mui/system";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function Projects() {
  const sections = [
    // Define your header sections here
    // Example: { title: "Home", url: "/" }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <div>
          <Header sections={sections} title="Projects" />{" "}
          {/* Pass in your header sections and title */}
          <main>
            <ProjectsGrid />{" "}
            {/* Display your projects using the ProjectsGrid component */}
          </main>
          <Footer /> {/* Display your footer */}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Projects;
