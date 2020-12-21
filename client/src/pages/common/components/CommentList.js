import { MDBContainer,  MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";
import React, {useState} from 'react';

const CommentList = (props) => {
    const [deleted, setDeleted] = useState(false);
    const {comment, columnSpan, mediaHeight} = props;
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
        return (
        <MDBContainer>
          <MDBCardHeader className="border-0 font-weight-bold">
            <p className="mr-4 mb-0">Comments</p>
          </MDBCardHeader>
          <MDBMedia className="d-block d-md-flex mt-4">
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
              <h5 className="font-weight-bold mt-0">
              <MDBIcon icon="reply" className="pull-right ml-2" />
              </h5>
              
              <MDBMedia className="d-block d-md-flex mt-4">
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBContainer>
    );
  }

export default CommentList;