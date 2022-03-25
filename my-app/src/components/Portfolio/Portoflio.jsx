import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Portoflio() {
  return (
    <Grid container justifyContent="center" spacing={2}>
        {/* Wandering Adventure */}
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Wanderting Adventure"
            image="https://live.staticflickr.com/65535/51440759308_1ab5b73624_c.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wandering Adventure
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A text adventure game that will truly test your skill. Can you
              outsmart your opponents in battle?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                window.open(
                  "https://github.com/madison-vega/wandering-adventure",
                  "_blank"
                );
              }}
              size="small"
            >
              Github
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://wanderingadventure.herokuapp.com/login",
                  "_blank"
                );
              }}
              size="small"
            >
              Live
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* WeebHub */}
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="WeebHub"
            image="https://live.staticflickr.com/65535/51182543595_62f2a2393b_c.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              WeebHub
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A place where you can discuss your favorite animes. 
            </Typography>
          </CardContent>
          <CardActions>
            <Button
            onClick={() => {
                window.open(
                  "https://github.com/GonzalezG97/WeebHub",
                  "_blank"
                );
              }} size="small">Github</Button>
            <Button
            onClick={() => {
                window.open(
                  "https://weebhub.herokuapp.com/",
                  "_blank"
                );
              }} size="small">Live More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
