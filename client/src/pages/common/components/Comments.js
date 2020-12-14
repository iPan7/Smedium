import React from "react";
import { MDBContainer,  MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";

const Comments = () => {
    return (
        <MDBContainer>
          <MDBCardHeader className="border-0 font-weight-bold">
            <p className="mr-4 mb-0">4 comments</p>
          </MDBCardHeader>
          <MDBMedia className="d-block d-md-flex mt-4">
            <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="" />
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
              <h5 className="font-weight-bold mt-0">
                Miley Steward<MDBIcon icon="reply" className="pull-right ml-2" />
              </h5>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <MDBMedia className="d-block d-md-flex mt-4">
            <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg" alt="" />
                <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                    <h5 className="font-weight-bold mt-0">
                    Tommy Smith<MDBIcon icon="reply" className="pull-right ml-2" />
                    </h5>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <div className="form-group mt-4">
                      <label htmlFor="quickReplyFormComment">Your comment</label>
                      <textarea className="form-control" id="quickReplyFormComment" rows="5"></textarea>
                      <div className="text-center my-4">
                        {/* <MDBBtn size="sm" color="primary">Post</MDBBtn> */}
                      </div>
                    </div>
                    <MDBMedia className="d-block d-md-flex mt-4">
                      <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" alt="" />
                      <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                        <h5 className="font-weight-bold mt-0">
                          Sylvester the Cat<MDBIcon icon="reply" className="pull-right ml-2" />
                        </h5>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </MDBMedia>
                    </MDBMedia>
                </MDBMedia>
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
          <MDBMedia className="d-block d-md-flex mt-4">
            <img className="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" alt="" />
            <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
              <h5 className="font-weight-bold mt-0">
                Caroline Horwitz<MDBIcon icon="reply" className="pull-right ml-2" />
              </h5>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </MDBMedia>
          </MDBMedia>
          <MDBPagination className="d-flex justify-content-center mt-5">
            <MDBPageItem disabled>
              <MDBPageNav>
                <span>First</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav>
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                Last
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBContainer>
    );
  }

export default Comments;