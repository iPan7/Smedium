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
import Delete from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import API from "../../../utils/API";

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
        }
    };
});

const Post = (props) => {
    const [deleted, setDeleted] = useState(false);
    const {post, columnSpan, mediaHeight} = props;
    const {id, title, image, content, datetime_created, username} = post;
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
    const formattedDateTime = new Date(datetime_created).toLocaleDateString("en-US", options);
    const classes = useStyles();

    const xsColumns = columnSpan || 12;
    const smColumns = columnSpan || 6;
    const mdColumns = columnSpan || 4;
    const cardHeight = mediaHeight || 240;

    function handleDelete() {
        API.deletePost(id)
            .then(() => setDeleted(true));
    }

    if(deleted) {
        return <>Post deleted</>;
    }

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
                                {username}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                {formattedDateTime}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <IconButton aria-label="delete" onClick={handleDelete}>
                            <Delete className={classes.deletePost}/>
                        </IconButton>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
};
export default Post;
