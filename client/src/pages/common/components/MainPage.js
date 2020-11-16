import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../style/index.css';
import axios from "axios";
import Post from "./Post";
import API from '../../../utils/API';

const useStyles = makeStyles((theme) => ({
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
    root: {
        flexGrow: 1,
    }
}));

// BODY OF MAIN PAGE
function MainPage() {
    let [posts, setPosts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        API.getAllPosts().then(({data}) => {
                console.log('posts', data);
                setPosts(data);
            });
    }, []);

    function getMappedPosts(posts) {
        return posts.map(post => <Post post={post}/>);
    }

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
                    {getMappedPosts(posts)}
                </Grid>
            </Container>
        </div>
    );
}

export default MainPage;
