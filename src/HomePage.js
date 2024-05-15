import React from 'react';
import { CssBaseline, Container, Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './HomePage.css'; // Import the CSS file

// Color Palette
const colors = {
  primary: '#66CC99', // Green
  secondary: '#A2393D', // Rust
  tertiary: '#DDBB99', // Earthy Tan
  text: '#333333', // Dark Text
};

const StyledContainer = styled(Container)({
  backgroundColor: colors.primary, // Set the background color of the container
});

const StyledMainSection = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(4),
}));

const StyledSideBar = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.tertiary,
  padding: theme.spacing(2),
}));

function HomePage() {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <StyledContainer className="container">
        <StyledMainSection elevation={3} className="main-section">
          <Typography variant="h4">Welcome to My Site</Typography>
          <Typography variant="body1" paragraph>
            This is the main content of my personal website.
          </Typography>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </StyledMainSection>
        <StyledSideBar elevation={3} className="sidebar">
          <Typography variant="h6">Sidebar</Typography>
          <Typography variant="body2">
            This is the sidebar content.
          </Typography>
        </StyledSideBar>
      </StyledContainer>
    </>
  );
}

export default HomePage;
