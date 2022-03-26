import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {

  return (
    <div>
      <Container maxWidth="xlg">
        <Typography variant="h2" component="h1">
          About Me
        </Typography>
        <Typography variant="body1" component="p">
          Welcome! I am a graduate from the UTSA Full Stack Program, here you
          will see some of my newest projects to show off my skills. I've worked
          customer support for Apple, Facebook and others. I hope to use my
          ability to understand how the average customer thinks to the
          development side. Armed with this knowledge I plan to build
          applications and websites with the user in mind to make sure its easy
          to read and use.
        </Typography>
        <Grid container>
          <Grid item>
            <Typography variant="h3" component="h2">
              Skills
            </Typography>
            <List>
              <ListItem>
                <FontAwesomeIcon icon={faReact} />
                <ListItemText primary="React" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faJs} />
                <ListItemText primary="JavaScript" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faHtml5} />
                <ListItemText primary="HTML" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faCss3Alt} />
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faNode} />
                <ListItemText primary="Node.js" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faNodeJs} />
                <ListItemText primary="Express.js" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faDatabase} />
                <ListItemText primary="MySQL" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faDatabase} />
                <ListItemText primary="Sequelize" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faDatabase} />
                <ListItemText primary="MongoDB" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faDatabase} />
                <ListItemText primary="Mongoose" />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
          <Typography variant="h3" component="h2">
              Work History
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutMe;
