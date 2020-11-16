import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../style/index.css';
import Post from "./Post";
import API from '../../../utils/API';

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    }
}));

function MainPage() {
    let [posts, setPosts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        API.getMyPosts().then(({data}) => setPosts(data));
    }, []);

    function getMappedPosts(posts) {
        if (posts.length === 0) {
            return <div>You do not currently have any posts</div>;
        }

        return posts.map(post => <Post post={post}/>);
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    My Posts
                </Typography>
                <Grid container spacing={3}>
                    {getMappedPosts(posts)}
                </Grid>
            </Container>
        </div>
    );
}

export default MainPage;
