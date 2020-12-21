import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import API from "../../../utils/API";
import Post from "./Post";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
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
    const [comment, setComment] = useState('');
    const [userId, setUserId] = useState(null);
    const username = localStorage.getItem('user');

    console.log(comment);

    useEffect(() => {
        API.getComments(postId).then(res => {
            console.log(res);
        });
        API.getSinglePost(postId)
            .then(({data: post}) => setPost(post));
        API.getUserIdFromUsername(username)
            .then(({data}) => setUserId(data.id));
    }, [postId]);

    const onCommentSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            mainPostId: postId,
            content: comment,
            commentMaker: userId
        }
        
        API.createComment(formValues).then((data) => {
            setComment('');
          });
    }

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
            <MDBContainer>
          <MDBCardHeader className="border-0 font-weight-bold">
            <p className="mr-4 mb-0">Comments</p>
          </MDBCardHeader>

        </MDBContainer>
        <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
      <form className="form-group mt-4" onSubmit={onCommentSubmit}>
        <label htmlFor="quickReplyFormComment">Your comment</label>
        <textarea className="form-control" id="quickReplyFormComment" rows="5" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        <div className="text-center my-4">
        <Button
              variant='contained'
              style={{backgroundColor: '#4f3558', color: '#fff', width: '15px'}}
              type="submit"
          >
              Submit
          </Button>
        </div>
      </form>
  </MDBMedia>
        </>
    );
}

export default SinglePost;
