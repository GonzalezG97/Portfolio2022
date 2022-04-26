import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <Container>
        <Grid>
            <Grid item>
                <Typography variant="h6" component="h1">
                Built with React and MaterialUI
                </Typography>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Footer