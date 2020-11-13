import React, {Component} from "react";
import Save from "./Save";
import ButtonAppBar from "./ButtonAppBar";
import '../style/CreatePost.css';
import {connect} from 'react-redux';
import axios from 'axios';

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    postSubmitted: false,
  };

  componentDidMount() {
    if (!this.props.viewer?.token) {
      this.props.history.push('/');
    }
  }

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submitPost = (e) => {
    if (!this.state.title || !this.state.content) {
      alert("All fields should be filed");
      e.preventDefault();
    } else {
      const {
        title,
        content,
        image
      } = this.state;
      const accessString = localStorage.getItem('token');
      axios.post('/post',
          {
            post: {
              title,
              content,
              image
            }
          },
          {
            headers: {authorization: `${accessString}`}, // TODO: set up axios hook to always set this header
          }
      )
          .then(data => console.log(data));
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    console.log(this.props);
    return (
        <>
          <ButtonAppBar/>
          {!this.state.postSubmitted ? (
              <div className="container">
                <div className="jumbotron mt-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="well well-sm">
                        <form className="form-horizontal" method="post">
                          <fieldset>
                            <legend className="text-center header" id="adp">
                              Add new post
                            </legend>
                            <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                              <input
                                  onChange={this.onChange("title")}
                                  name="title"
                                  type="text"
                                  placeholder="Post-Title"
                                  className="form-control"
                              ></input>
                            </div>
                            <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                              <input
                                  onChange={this.onChange("image")}
                                  name="image"
                                  type="text"
                                  placeholder="image http://"
                                  className="form-control"
                              ></input>
                            </div>
                            <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-pencil-square-o bigicon"></i>
                          </span>
                              <textarea
                                  onChange={this.onChange("content")}
                                  name="content"
                                  type="text"
                                  placeholder="Your post"
                                  className="form-control"
                                  rows="7"
                              ></textarea>
                            </div>
                            <div className="form-group">
                              <button
                                  onClick={this.submitPost}
                                  type="button"
                                  className="btn btn-primary btn-lg"
                              >
                                Submit Post
                              </button>
                            </div>
                          </fieldset>
                        </form>
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


function mapStateToProps({viewer}) {
  return {viewer};
}


export default connect(mapStateToProps)(CreatePost);
