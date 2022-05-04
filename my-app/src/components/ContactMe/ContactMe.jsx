import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer"

function ContactMe() {

  return (
    <>
    <Container maxWidth="xlg">
      <Typography variant="h2" component="h1">
        Contact Me
      </Typography>
      <Grid>
        <Grid item>
          <div>
            <Typography variant="h5" component="p">
              gustavoshadow13@gmail.com
            </Typography>
          </div>
          <div>
            <a href="https://github.com/GonzalezG97">
              <Typography variant="h5" component="p">
                Github
              </Typography>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/gustavo-gonzalez-00362215b/">
              <Typography variant="h5" component="p">
                Linkedin
              </Typography>
            </a>
          </div>
        </Grid>
      </Grid>
      <ContactForm/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    </Container>
    </>
  );
}

export default ContactMe;
