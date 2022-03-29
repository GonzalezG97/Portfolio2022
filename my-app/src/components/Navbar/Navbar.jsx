import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMandalorian } from "@fortawesome/free-brands-svg-icons";




function Navbar() {
    return(
    <AppBar>
        <Container maxWidth="lx">
            <Toolbar>
                <Typography
                variant="h3"
                component="h1"
                >
                    <FontAwesomeIcon icon={faMandalorian} />
                </Typography>
            </Toolbar>
        </Container>
      </AppBar>

    )
};

export default Navbar;