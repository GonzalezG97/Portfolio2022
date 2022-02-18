import React from "react";
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';


function AboutMe() {
    return (
        <div>
            <Container maxWidth="xlg">
            <Typography variant="h3" component="h1">
                About Me
            </Typography>
            <Typography variant="body1" component="p">
                Welcome! I am a graduate from the UTSA Full Stack Program, here you will see some of my newest projects to show off my skills. I've worked customer
                support for Apple, Facebook and others. I hope to use my ability to
                understand how the average customer thinks to the development side.
                Armed with this knowledge I plan to build applications and websites with
                the user in mind to make sure its easy to read and use.
            </Typography>
            </Container>                
        </div>
    );
}

export default AboutMe;
