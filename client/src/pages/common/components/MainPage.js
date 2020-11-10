import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import '../style/index.css';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },


}));

// BODY OF MAIN PAGE
function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.hero}>
        <Box>Smedium</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Latest Posts
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Post 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://cdn0.iconfinder.com/data/icons/avatar-25/64/avatar-guy-handsome-man-short-glasses-512.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Emerson
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Oct 31, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Post 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://cdn0.iconfinder.com/data/icons/avatar-25/64/avatar-woman-girl-brown-ponytail-glasses-512.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Hayden L
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Oct 31, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Post 3
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://cdn0.iconfinder.com/data/icons/avatar-25/64/avatar-guy-handsome-man-hipster-beard-undercut-512.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Bryan Guilas
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Oct 31, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainPage;
