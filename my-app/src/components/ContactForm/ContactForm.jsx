import { React, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardContent, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function ContactForm() {
  const formId = process.env.REACT_APP_FORM_ID;
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const [messageState, setMessageState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(formSparkUrl, { messageState });
  };


  return (
    <Container>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                required
                label="First Name"
                onInput={ e => setMessageState({...messageState, firstName: e.target.value})}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" variant="outlined" onInput={ e => setMessageState({...messageState, lastName: e.target.value})} fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                required
                type="email"
                label="Email"
                onInput={ e => setMessageState({...messageState, email: e.target.value})}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                required
                type="number"
                label="Phone Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="Message"
                multiline
                rows={4}
                label="Message"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContactForm;
