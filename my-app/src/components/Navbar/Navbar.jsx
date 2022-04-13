import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMandalorian } from "@fortawesome/free-brands-svg-icons";
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
          <Button color="secondary"
          onClick={() => {
            window.open('https://drive.google.com/file/d/18hsSEL0ZZk5uXMOLvnjc80IdGhsqXzU9/view?usp=sharing')
          }}
          >
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
