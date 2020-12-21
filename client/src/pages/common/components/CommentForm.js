import React from "react";
import Button from '@material-ui/core/Button';
import { MDBContainer,  MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";

const CommentForm = () => {
    return (
  <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
      <div className="form-group mt-4">
        <label htmlFor="quickReplyFormComment">Your comment</label>
        <textarea className="form-control" id="quickReplyFormComment" rows="5"></textarea>
        <div className="text-center my-4">
        <Button
              variant='contained'
              style={{backgroundColor: '#4f3558', color: '#fff', width: '15px'}}
          >
              Submit
          </Button>
        </div>
      </div>
  </MDBMedia>
    );
  }

export default CommentForm;