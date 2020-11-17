import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from 'react-redux';
import { setViewerToken } from '../../Viewer';

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
  const { token } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(setViewerToken(null));
    history.push('/');
  };

  // const createPostButton = () => {
  //   localStorage.removeItem('token');
  //   dispatch(setViewerToken(null));
  //   history.push('/');
  // };

  return (

    <AppBar style={{ backgroundColor: '#4f3558' }} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>

          <Button
            component={Link}
            to='/'
            color="inherit">
            Smedium
    </Button>
        </Typography>
        {
          token ?
          <React.Fragment>
            <Button a href="/CreatePost" color="inherit">Create Post</Button>
            <Button a href="/posts/mine" color="inherit">My Posts</Button>
            <Button
              color='inherit'
              onClick={handleSignOut}
            >
              Log Out
            </Button>
          </React.Fragment>
           :
            <div>
              <Button
                to='/signup'
                component={Link}
                color="inherit">
                Register
          </Button>
              <Button
                to='/signin'
                component={Link}
                color="inherit">
                Login
          </Button>
            </div>
        }

      </Toolbar>
    </AppBar>

  );
};
