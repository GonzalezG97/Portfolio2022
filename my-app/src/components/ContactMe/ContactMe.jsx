import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CardContent, Card } from "@mui/material";
import axios from "axios";

function ContactMe() {
  const formId = process.env.REACT_APP_FORM_ID;
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const OnSubmit = async (e) => {
    e.preventDefault();
    axios.post(formSparkUrl, { messageState });
  };

  const [messageState, setMessageState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1">
        Contact Me
      </Typography>
      <Container>
        <Grid container>
          <Grid item>
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
        </Grid>
      </Container>
    </Container>
  );
}

export default ContactMe;
