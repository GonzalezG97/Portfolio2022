import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMandalorian } from "@fortawesome/free-brands-svg-icons";
import { faFileUser } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "../About Me/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Portfolio from "../Portfolio/Portoflio";

function Navbar() {
  const [page, setPage] = useState();

  const handleChange = (e, newValue) => {
    setPage(newValue);
  };

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <>
      <AppBar position="sticky" sx={{ background: "black" }}>
        <Toolbar>
          <Button color="secondary">
            <Typography variant="h3">
              <FontAwesomeIcon icon={faMandalorian} />
            </Typography>
          </Button>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            value={page}
            onChange={handleChange}
            indicatorColor="secondary"
          >
            <Tab label="About" />
            <Tab label="Portfolio" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {page === 0 && <AboutMe />}
      {page === 1 && <Portfolio />}
      {page === 2 && <ContactMe />}
    </>
  );
}

export default Navbar;
