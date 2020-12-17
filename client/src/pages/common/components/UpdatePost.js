import React, { Component } from "react";
// import {connect} from 'react-redux';
// import {Link} from "react-router-dom";
// import Button from "@material-ui/core/Button";
import API from "../../../utils/API";
// import Save from "./Save";
// import ButtonAppBar from "./ButtonAppBar";
import "../style/CreatePost.css";
import axios from "axios";
import ButtonAppBar from "./ButtonAppBar";
import Button from "@material-ui/core/Button";
import Save from "./Save";
import { connect } from "react-redux";
//Have the user be able to edit their post on the main page
//Create edit button on the post
//Be able to edit title, content, image
//Have a 'submit edit' button once user has edited their post

// useEffect(() => {
//     API.getSinglePost(postId)
//         .then(({data: post}) => setPost(post));
// }, [postId]);

// if (post === null) {
//     return null;
// }

class UpdatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      image: "",
      postId: null,
      post: null,
    };
  }
  componentDidMount() {
    const patharray = window.location.pathname.split("/");
    const postId = patharray[patharray.length - 1];
    API.getSinglePost(postId).then(({ data: post }) => {
      this.setState({ post, title: post.title, content: post.content, image: post.image });
      console.log(this.state.post);
    });
  }
  render() {
    const patharray = window.location.pathname.split("/");
    const postId = patharray[patharray.length - 1];
    console.log(this.props);
    return (
      <>
        <ButtonAppBar />
        {!this.state.postSubmitted ? (
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div id="div-col-md-6" className="col-md-6 ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="well well-sm">
                      <form
                        id="new-post-background"
                        className="form-horizontal"
                        method="post"
                      >
                        <fieldset>
                          <legend className="text-center header" id="adp">
                            Update Post
                          </legend>
                          <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center">
                              <i id="icons" className="fa fa-user bigicon" />
                            </span>
                            <input
                              // onChange={this.onChange("title")}
                              name="title"
                              type="text"
                              id="title"
                              placeholder="Title"
                              className="form-control"
                              value={this.state.title}
                            />
                          </div>
                          <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center">
                              <i id="icons" className="fa fa-user bigicon"></i>
                            </span>
                            <input
                              // onChange={this.onChange("image")}
                              name="image"
                              type="text"
                              placeholder="Image URL"
                              className="form-control"
                              value={this.state.image}
                            />
                          </div>
                          <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center">
                              <i
                                id="icons"
                                className="fa fa-pencil-square-o bigicon"
                              ></i>
                            </span>
                            <textarea
                              // onChange={this.onChange("content")}
                              name="content"
                              type="text"
                              placeholder="Post content..."
                              className="form-control"
                              rows="7"
                              value={this.state.content}
                            />
                          </div>
                          <div className="form-group">
                            <Button
                              onClick={this.submitPost}
                              variant="contained"
                              style={{
                                backgroundColor: "#328284",
                                color: "#fff",
                              }}
                            >
                              Update Post
                            </Button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Save
            title={this.state.title}
            content={this.state.content}
            image={this.state.image}
          />
        )}
      </>
    );
  }
}

function mapStateToProps({ viewer }) {
  return { viewer };
}
export default connect(mapStateToProps)(UpdatePost);
