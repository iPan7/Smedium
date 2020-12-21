import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import API from "../../../utils/API";
import Post from "./Post";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Comments from './Comments';
import Button from '@material-ui/core/Button';
import { MDBMedia, MDBCardHeader } from "mdbreact";
import { use } from 'passport';

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
    }
}));



function SinglePost() {
    const { postId } = useParams();
    let [post, setPost] = useState(null);
    const [mainPost, setMainPost] = useState('');
    const [comments, setComments] = useState([]);
    const [ content, setContent ] = useState('');
    const classes = useStyles();

    useEffect(() => {
        console.log('post id', postId)
        API.getSinglePost(postId)
            .then(({data: post}) => {
                console.log('this is the single post request from API', post)
                // setMainPost(post.id)
                setPost(post)
            });
        renderComments();
    }, []);

    const renderComments = () => {
        setMainPost(JSON.stringify(postId))
        console.log('render comments function', mainPost)
        API.getComments(mainPost)
            .then((data) => {
                console.log('this is the get comments frontend', data)
            });
    }

    const handleOnChange = (e) => {
        const content = e.target.value
        setContent(content)
    }
    // the handle insert funtion works
    // - It could user more funtionality to make it more dynamic
    // - possible a function that empties the text field and generates a new comments section
    const handleInsert = () => {
        const newComment = {content: content, id: postId}
        console.log('New Comment',newComment)
        API.insertComment(newComment)
            .then((data) => {
                console.log(data)
            })
            .catch(e => console.log('INSERT COMMENT: error', e));
    }

    // function getMappedComments(comments) {
    //     return comments.map(comment => <Comments comment={comment}/>);
    // }

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
            <MDBCardHeader className="border-0 font-weight-bold">
                <p className="mr-4 mb-0">Comments</p>
            </MDBCardHeader>
            <div>
                {/* {getMappedComments(comments)} */}
            </div>
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                    <div className="form-group mt-4">
                      <label htmlFor="quickReplyFormComment">Your comment</label>
                      <textarea 
                        className="form-control" 
                        id="quickReplyFormComment" 
                        rows="5"
                        onChange={handleOnChange}>
                        </textarea>
                      <div className="text-center my-4">
                        <Button
                            aria-label="delete" onClick={handleInsert}
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
