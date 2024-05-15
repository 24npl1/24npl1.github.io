import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Header() {
  const sections = [
    { title: "About Me", url: "/" },
    { title: "Projects", url: "/Projects" },
    { title: "Thoughts", url: "/" },
  ];

  const title = "Nathaniel Lentz";

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          variant="h2"
          color="inherit"
          align="left"
          href="/"
          underline="hover"
          rel="noopener noreferrer"
          noWrap
          sx={{ marginBottom: 4, paddingTop: 4, flex: "1 1 auto" }}
        >
          {title}
        </Link>
        <div>
          <Link
            color="inherit"
            noWrap
            href="https://github.com/24npl1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ p: 1, display: "inline-block", verticalAlign: "middle" }}
          >
            <GitHubIcon sx={{ fontSize: "2rem" }} />
          </Link>
          <Link
            color="inherit"
            noWrap
            href="https://www.strava.com/athletes/43611660"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ p: 1, display: "inline-block", verticalAlign: "middle" }}
          >
            <img
              src={"./strava_icon.svg"}
              alt="Strava"
              style={{ width: "2.5rem", height: "auto" }}
            />
          </Link>
          <Link
            color="inherit"
            noWrap
            href="https://www.instagram.com/latenentz"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ p: 1, display: "inline-block", verticalAlign: "middle" }}
          >
            <InstagramIcon sx={{ fontSize: "2rem" }} />
          </Link>
          <Link
            color="inherit"
            noWrap
            href="https://www.linkedin.com/in/nathaniel-lentz"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ p: 1, display: "inline-block", verticalAlign: "middle" }}
          >
            <LinkedInIcon sx={{ fontSize: "2rem" }} />
          </Link>
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
          align: "center",
          borderBottom: 2,
          borderTop: 2,
        }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="h5"
            href={section.url}
            underline="hover"
            sx={{ p: 1, flexShrink: 0, paddingBottom: 4, paddingTop: 4 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
