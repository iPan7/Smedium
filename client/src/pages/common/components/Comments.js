import React from "react";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";
import API from "../../../utils/API";
import DeleteIcon from '@material-ui/icons/Delete';

const Comments = (props) => {

  const deleteComment = () => {
    API.deleteComments(props.id)
      .then((data) => {
        // props.changed()
        console.log(data)
      })
  }

  return (
    <MDBContainer>
      <MDBMedia className="d-block d-md-flex mt-4">
        <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
          <h5 className="font-weight-bold mt-0">
            Miley Steward {'This from comments', props.commentMaker}
            <DeleteIcon onClick={deleteComment}/>
          </h5>
            

          {'This from comments', props.content}
          <MDBMedia className="d-block d-md-flex mt-4"></MDBMedia>
        </MDBMedia>
      </MDBMedia>
    </MDBContainer>
  );
};

export default Comments;
