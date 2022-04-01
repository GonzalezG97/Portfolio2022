import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CardContent, Card } from "@mui/material";
import axios from "axios";
import Navbar from "../Navbar/Navbar"

function ContactMe() {
  const formId = process.env.REACT_APP_FORM_ID;
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const OnSubmit = async (e) => {
    e.preventDefault();
    axios.post(formSparkUrl, { messageState }).then((err) => console.log(err));
  };

  const [messageState, setMessageState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  return (
    <div>
      <Navbar/>
      <Container >
        <Typography variant="h2" component="h1">
          Contact Me
        </Typography>
      </Container>
      <Grid container justifyContent="center" spacing={2} columns={2}>
        <Grid item>
          <Grid item sm={3}>
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
        <Grid container item collumns={2}>
            <Grid container item>
          <Card>
            <CardContent>
              <form onSubmit={OnSubmit}>
                <Grid container>
                  <Grid item>
                    <TextField
                      required
                      type="text"
                      id="outlined-required"
                      label="First Name"
                      defaultValue=""
                      onChange={(e) =>
                        setMessageState({
                          ...messageState,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Last Name"
                      defaultValue=""
                      onChange={(e) =>
                        setMessageState({
                          ...messageState,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      type="number"
                      id="outlined-required"
                      label="Phone Number"
                      defaultValue=""
                      onChange={(e) =>
                        setMessageState({
                          ...messageState,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      type="email"
                      id="outlined-password-input"
                      label="Email"
                      defaultValue=""
                      onChange={(e) =>
                        setMessageState({
                          ...messageState,
                          email: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="standard-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      defaultValue=""
                      variant="standard"
                      onChange={(e) =>
                        setMessageState({
                          ...messageState,
                          message: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <Button type="submit" variant="contained" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
            <CardContent />
          </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactMe;
