import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardContent, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ContactForm() {
  return (
    <Container>
      <Card>
        <CardContent>
          <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                required
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                required
                type="email"
                label="Email"
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
                color="primary"
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
