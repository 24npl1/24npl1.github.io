import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Blog from "./Blog";
import Projects from "./Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} /> {/* Use 'element' prop */}
          <Route path="/projects" element={<Projects />} />{" "}
          {/* Use 'element' prop */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
