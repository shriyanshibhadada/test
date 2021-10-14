import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, IconButton, Typography } from "@material-ui/core/";
import MenuIcon from "@mui/icons-material/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {props.handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
