import React from "react";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";
import API from "../../../utils/API";

const Comments = () => {

  return (
    <MDBContainer>
      <MDBMedia className="d-block d-md-flex mt-4">
        <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
          <h5 className="font-weight-bold mt-0">
            Miley Steward {'This from comments' }
            <MDBIcon icon="reply" className="pull-right ml-2" />
          </h5>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.

          {'This from comments' }
          <MDBMedia className="d-block d-md-flex mt-4"></MDBMedia>
        </MDBMedia>
      </MDBMedia>
    </MDBContainer>
  );
};

export default Comments;
