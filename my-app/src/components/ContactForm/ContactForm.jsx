import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardContent, Card } from "@mui/material";
import TextField from "@mui/material/TextField";

function ContactForm() {
  return <Container>
    <Card>
      <CardContent>
        <Grid container spacing={1}>


          <Grid xs={12} sm={6} item>
            <TextField required label="First Name" variant="outlined"/>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField label="Last Name" variant="outlined"/>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField required type="email" label="Email" variant="outlined"/>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField required type="number" label="Phone Number" variant="outlined"/>
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField type="Message" label="Message" variant="outlined"/>
          </Grid>


        </Grid>

      </CardContent>
    </Card>
  </Container>;
}

export default ContactForm;
