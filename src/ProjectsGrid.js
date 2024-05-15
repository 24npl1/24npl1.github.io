import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const projectsData = [
  // Define your project data here
  // Example: { title: "Project Title", description: "Project description", image: "/project-image.png", link: "/project-link" }
];

function ProjectsGrid() {
  return (
    <Grid container spacing={3}>
      {projectsData.map((project, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            {/* Add project image here */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectsGrid;
