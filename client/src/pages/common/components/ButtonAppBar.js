import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../style/CreatePost.css';
// import Button from "@material-ui/core/Button";
// import { Link, Router, useHistory } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { setViewerToken } from "../pages/Viewer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  //   const { token } = useSelector((state) => state.viewer);
  //   const dispatch = useDispatch();
  //   const history = useHistory();

  //   const handleSignOut = () => {
  //     localStorage.removeItem("token");
  //     // dispatch(setViewerToken(null));
  //     history.push("/");
  //   };

  return (
    <div className={classes.root}>
      {/* <Router> */}
      {/* <AppBar position="static">
        <Toolbar className="Smedium">
          Smedium */}
      {/* <Button component={Link} to="/" color="inherit">
              About
            </Button>
            <Button to="/discover" component={Link} color="inherit">
              Discover
            </Button>
            <Button to="/search" component={Link} color="inherit">
              Search
            </Button> */}
      {/* {token ? (
            <Button to="/users" component={Link} color="inherit">
              User
            </Button>
          ) : null}
          {token ? (
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button> */}
      {/* ) : ( */}
      {/* <div>
              <Button to="/signup" component={Link} color="inherit">
                Sign Up
              </Button>
              <Button to="/signin" component={Link} color="inherit">
                Sign In
              </Button>
            </div> */}
      {/* )} */}
      {/* </Toolbar>
      </AppBar> */}
      {/* </Router> */}
    </div>
  );
}
