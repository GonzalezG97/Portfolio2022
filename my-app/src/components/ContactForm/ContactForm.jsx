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


          <Grid item>
            <TextField required label="First Name" variant="outlined"/>
          </Grid>
          <Grid item>
            <TextField required label="Last Name" variant="outlined"/>
          </Grid>
          <Grid item>
            <TextField required type="email" label="Email" variant="outlined"/>
          </Grid>



        </Grid>

      </CardContent>
    </Card>
  </Container>;
}

export default ContactForm;
