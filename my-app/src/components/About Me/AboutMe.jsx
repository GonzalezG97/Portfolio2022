import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
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
  faGitAlt, 
  faBootstrap,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faCodeMerge } from "@fortawesome/free-solid-svg-icons";

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
      </Container>
      <Container justifyContent="center">
      <Typography variant="h2" component="h1">
          Technologies
        </Typography>
      <Grid container spacing={25}>
          {/* Front End */}
          <Grid item>
            <Typography variant="h3" component="h2">
              Front End
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
                <ListItemText primary="jQuery" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faBootstrap} />
                <ListItemText primary="Booststrap" />
              </ListItem>
              <ListItem>
                <ListItemText primary="MaterialUI" />
              </ListItem>
            </List>
          </Grid>
          {/* Back End */}
          <Grid item>
          <Typography variant="h3" component="h2">
              Back End
            </Typography>
            <List>
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
          {/* Tools*/}
          <Grid item>
            <Typography variant="h3" component="h2">
              Tools
            </Typography>
            <List>
              <ListItem>
                <FontAwesomeIcon icon={faGitAlt} />
                <ListItemText primary="Git" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faGithub} />
                <ListItemText primary="Github" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Postman" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faCode} />
                <ListItemText primary="VS Code" />
              </ListItem>
              <ListItem>
                <FontAwesomeIcon icon={faCodeMerge} />
                <ListItemText primary="Heroku" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutMe;
