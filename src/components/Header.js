import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Divider } from "@material-ui/core";

import Routes from "../utils/Routes"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    marginRight: 25
  },
  textNormal: {
    fontWeight: 100,
    opacity: 0.5
  },
  divider: {
    height: 50
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <span className={classes.textNormal}>Galler</span>easy
        </Typography>
        <Divider orientation="vertical" className={classes.divider} />
        <Toolbar component="nav" variant="dense">
          <Link
            color="inherit"
            noWrap
            key="search"
            href={Routes.Search}
            variant="body2"
            className={classes.toolbarLink}
          >
            Search
          </Link>
          <Link
            color="inherit"
            noWrap
            key="favorites"
            href={Routes.Favorites}
            variant="body2"
            className={classes.toolbarLink}
          >
            Favorites
          </Link>
        </Toolbar>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
