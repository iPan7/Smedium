import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import '../style/index.css';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    }
}));

const Post = (props) => {
    const {title, image, content, datetime_created, username} = props.post;
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDateTime = new Date(datetime_created).toLocaleDateString("en-US", options);
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                        <Box ml={6}>
                            <Typography variant="subtitle2" component="p">
                                {username}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                {formattedDateTime}
                            </Typography>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
};
export default Post;
