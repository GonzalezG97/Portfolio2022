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
                Hello and welcome to my website! I am new to web development and created
                this to show off my projects and new skills. I worked in customer
                support for many big names in tech. I hope to use my ability to
                understand how the average customer thinks to the development side.
                Armed with this knowledge I plan to build applications and websites with
                the most common user issues in mind to help minimize user error.
            </Typography>
            </Container>                
        </div>
    );
}

export default AboutMe;
