import {React, useState} from "react";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CardContent, Card } from "@mui/material";
import { useFormspark } from "@formspark/use-formspark";


function ContactMe() {

    const formId = process.env.REACT_APP_FORM_ID;
    const formSparkUrl = 'https://submit-form.com/${formId}';

    const OnSubmit = async (e) => {
        e.preventDefault();
        console.log(messageState)
    };

    const [messageState, setMessageState] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email:'',
        message: '',
    })

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
            </Container>
            
            <Container>
            <Card>
                <CardContent>
                    <form onSubmit={OnSubmit}>
                    <Grid container spacing={1}>
                        <Grid item>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="First Name"
                            defaultValue=""
                            onChange={(e) => setMessageState({...messageState, firstName: e.target.value})}
                            />
                            
                        </Grid>
                        <Grid item>
                        <TextField
                            fullWidth
                            label="Last Name"
                            defaultValue=""
                            onChange={(e) => setMessageState({...messageState, lastName: e.target.value})}
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
                            onChange={(e) => setMessageState({...messageState, phoneNumber: e.target.value})}
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
                            onChange={(e) => setMessageState({...messageState, email: e.target.value})}
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
                            onChange={(e) => setMessageState({...messageState, message: e.target.value})}
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
                <CardContent/>
            </Card>
            </Container>               
        </div>
    );
}

export default ContactMe;