import React from "react";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CardContent, Card } from "@mui/material";



function ContactMe() {
    return (
        <div>
            <Container maxWidth="xlg">
            <Typography variant="h3" component="h1">
                Contact Me
            </Typography>
            </Container> 
            <Container>
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
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="First Name"
                            defaultValue=""
                            />
                        </Grid>
                        <Grid item>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Last Name"
                            defaultValue=""
                            />
                        </Grid>
                        <Grid item>
                        <TextField
                            fullWidth
                            required
                            type="number"
                            id="outlined-required"
                            label="Phone Number"
                            defaultValue=""
                            />
                        </Grid>
                        <Grid item>
                        <TextField
                            fullWidth
                            required
                            type="email"
                            id="outlined-password-input"
                            label="Email"
                            defaultValue=""
                            />
                        </Grid>
                        <Grid item>
                        <TextField
                            fullWidth
                            id="standard-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            defaultValue=""
                            variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    </CardContent>
                <CardContent/>
            </Card>
            </Container>               
        </div>
    );
}

export default ContactMe;