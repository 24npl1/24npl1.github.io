import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./Footer";
import theme from "./theme"; // Import your custom theme
import AboutMe from "./AboutMe";

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" alignItems="center">
        <Header align="left" />
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={6} md={8}>
            <AboutMe />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 4,
            }}
          >
            <Card
              sx={{
                maxWidth: 200, // Adjust the max width of the card as needed
                margin: "16px auto", // Adjust the margin as needed
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
                alignItems: "center",
                border: "2px solid white", // Add a white border
              }}
            >
              <CardMedia
                component="img"
                alt="A photo of me!"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="auto"
                image="/headshot.jpg"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
