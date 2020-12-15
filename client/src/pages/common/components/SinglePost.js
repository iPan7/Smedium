import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import API from "../../../utils/API";
import Post from "./Post";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Comments from './Comments';
import Button from '@material-ui/core/Button';
import { MDBContainer,  MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";

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
    }, [postId]);

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
            <Comments />
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                    <div className="form-group mt-4">
                      <label htmlFor="quickReplyFormComment">Your comment</label>
                      <textarea className="form-control" id="quickReplyFormComment" rows="5"></textarea>
                      <div className="text-center my-4">
                      <Button
                            // aria-label="delete" onClick={handleDelete}
                            variant='contained'
                            style={{backgroundColor: '#4f3558', color: '#fff', width: '15px'}}
                        >
                            Submit
                        </Button>
                      </div>
                    </div>
                </MDBMedia>

        </>
    );
}

export default SinglePost;
