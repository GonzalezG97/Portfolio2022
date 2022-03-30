import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMandalorian } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  let navigate = useNavigate();

  return (
    <AppBar position="static">
      <Grid container maxWidth="lx">
        <Typography variant="h3" component="h1">
          <FontAwesomeIcon icon={faMandalorian} />
        </Typography>
        <Box spacing={5} sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
          <Typography variant="h4" component="h2">
            <Link to="/">Home</Link>
          </Typography>

          <Typography variant="h4" component="h2">
            <Link to="/Portfolio">Portfolio</Link>
          </Typography>
          <Typography variant="h4" component="h2">
            <Link to="/Contact">Contact Me</Link>
          </Typography>
        </Box>
      </Grid>
    </AppBar>
  );
}

export default Navbar;
