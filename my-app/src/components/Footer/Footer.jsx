import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container>
      <Grid>
        <Grid item>
          <Typography variant="h6" component="h1">
            Built with ReactJs and MaterialUI
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" component="h2">
            <FontAwesomeIcon icon={faCopyright} /> 2022
          </Typography>
        </Grid>
        <Grid container rowSpacing={1}>
          <Grid item>
              <Button onClick={() => {
            window.open('https://www.linkedin.com/in/gustavo-gonzalez-00362215b/')
          }}>
                <FontAwesomeIcon icon={faLinkedin} />
              </Button>
          </Grid>
          <Grid item>
              <Button onClick={() => {
            window.open('https://github.com/GonzalezG97')
          }}>
                <FontAwesomeIcon icon={faGithub} />
              </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
