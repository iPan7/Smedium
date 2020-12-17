import React, {useState} from 'react';
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
import {Link} from "react-router-dom";
// import Delete from '@material-ui/icons/Delete';
// import IconButton from "@material-ui/core/IconButton";
import API from "../../../utils/API";
import Button from "@material-ui/core/Button";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => {
    return {
        card: {
            maxWidth: "100%",
        },
        cardActions: {
            display: "flex",
            justifyContent: "space-between"
        },
        author: {
            display: "flex"
        },
        deletePost: {
            cursor: 'pointer'
        },
        postDeletedMessage: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: '25px'
        }
    };
});

const Post = (props) => {
    const [deleted, setDeleted] = useState(false);
    const {post, columnSpan, mediaHeight} = props;
    const {id, title, image, content, datetime_created, username, userId, idOfCurrentUser} = post;
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
    const formattedDateTime = new Date(datetime_created).toLocaleDateString("en-US", options);
    const classes = useStyles();

    const xsColumns = columnSpan || 12;
    const smColumns = columnSpan || 6;
    const mdColumns = columnSpan || 4;
    const cardHeight = mediaHeight || 240;

    function handleDelete() {
        const yesToDeletePost = window.confirm('Are you sure you want to delete this post?');
        if (yesToDeletePost) {
            API.deletePost(id)
                .then(() => setDeleted(true));
        }
    }

    if(deleted) {
        return (
            <Grid item xs={xsColumns} sm={smColumns} md={mdColumns} className={classes.postDeletedMessage}>
                Post Deleted
            </Grid>
        );
    }

    const postBelongsToCurrentUser = userId === idOfCurrentUser;

    return (
        <Grid item xs={xsColumns} sm={smColumns} md={mdColumns}>
            <Card className={classes.card}>
                <Link to={`/posts/${id}`}>
                    <CardActionArea>
                        <CardMedia
                            style={{height: cardHeight}}
                            image={image}
                            title={title}
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
                </Link>
                <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                        <Box ml={6}>
                            <Typography variant="subtitle2" component="p">
                                Author: {username}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                Date: {formattedDateTime}
                            </Typography>
                        </Box>
                    </Box>
                    {/*THIS LINKS THE EDIT BUTTON TO THE EDIT POST PAGE*/}
                    {postBelongsToCurrentUser && (
                    <Link to={`/posts/update/${id}`}>
                        <Button

                            // onClick={this.editPost}
                            variant='contained'
                            style={{backgroundColor: '#4f3558', color: '#fff', marginLeft: '100px'}}
                        >
                            Edit
                        </Button>
                    </Link>
                    )}
                    {postBelongsToCurrentUser && (<Box>
                        <Button
                            aria-label="delete" onClick={handleDelete}
                            variant='contained'
                            style={{backgroundColor: '#4f3558', color: '#fff', width: '15px'}}
                        >
                            Delete
                        </Button>
                    </Box>)}
                </CardActions>
            </Card>
        </Grid>
    );
};
export default Post;
