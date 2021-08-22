import React from "react";
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#ffbd27",
    color: "#36207f"
  },
  title: {
    flexGrow: 1,
    color: "#15151d"
  },
}));

const NavbarComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>Ditto</Typography>
          <AmplifySignOut />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavbarComponent;
