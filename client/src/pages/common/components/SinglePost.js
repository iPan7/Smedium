import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import API from "../../../utils/API";
import Post from "./Post";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
    }
}));

function SinglePost() {
    const { postId } = useParams();
    let [post, setPost] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        API.getSinglePost(postId)
            .then(({data: post}) => setPost(post));
    }, []);

    if (post === null) {
        return null;
    }

    return (
        <>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Grid container
                      direction="row"
                      justify="center"
                      item
                      xs={12}
                      md={12}>
                    <Post post={post} columnSpan={12} mediaHeight={500}/>
                </Grid>
            </Container>

        </>
    );
}

export default SinglePost;
