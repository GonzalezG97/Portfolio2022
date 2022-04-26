import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
        <Grid>
          <Grid item>
              <Button>
                <FontAwesomeIcon icon={faLinkedin} />
              </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
