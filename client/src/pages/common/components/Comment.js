import {
  MDBContainer,
  MDBCardHeader,
  MDBIcon,
  MDBMedia,
  MDBBtn,
  MDBPageItem,
  MDBPagination,
  MDBPageNav,
} from "mdbreact";
import React, { useState } from "react";

const Comment = (props) => {
  return (
    <MDBMedia className="d-block d-md-flex mt-4">
      <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
        <h5 className="font-weight-bold mt-0">{props.username}</h5>
        {props.content}
      </MDBMedia>
    </MDBMedia>
  );
};

export default Comment;
