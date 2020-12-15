import React from "react";
import { MDBContainer,  MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";

const Comments = () => {
    return (
        <MDBContainer>
          <MDBCardHeader className="border-0 font-weight-bold">
            <p className="mr-4 mb-0">Comments</p>
          </MDBCardHeader>
          <MDBMedia className="d-block d-md-flex mt-4">
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
              <h5 className="font-weight-bold mt-0">
                Miley Steward<MDBIcon icon="reply" className="pull-right ml-2" />
              </h5>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <MDBMedia className="d-block d-md-flex mt-4">
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBContainer>
    );
  }

export default Comments;