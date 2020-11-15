import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Saveas = (props) => {
  const classes = useStyles();


  return (

    <div >
      <h4 style={{ textAlign: 'center' }}>Your post has been posted on the main page!</h4>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      // style={{ minHeight: '100vh' }}


      >
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" style={{ backgroundColor: '#328284', color: '#fff' }}>
                Delete
      </Button>
              <Button size="small" style={{ backgroundColor: '#328284', color: '#fff' }}>
                Update
      </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Saveas;



{/* <>
<div className="Post" href={MainPage}>
  <h1>{props.title}</h1>
  <img src={props.image} alt={props.title}></img>
  <p>{props.content}</p>
</div>

</> */}