import React, { Component } from "react";
import Save from "./Save";
import ButtonAppBar from "./ButtonAppBar";
import Button from '@material-ui/core/Button';
import axios from "axios";

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    postSubmitted: false,
  };

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
        image,
      } = this.state;

      const accessString = localStorage.getItem('token');
      axios.post('/post',
        {
          post: {
            title,
            content,
            image,
          },
        },
        {
          headers: {
            authorization: `${accessString}`,
          }

        }).then((data) => { console.log(data); });
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        <ButtonAppBar />
        {!this.state.postSubmitted ? (
          <div className="container" >

            <div className="row d-flex justify-content-center" >
              <div id="div-col-md-6" className="col-md-6 ">
                <div className="well well-sm">
                  <form id="new-post-background" className="form-horizontal" method="post">
                    <fieldset>
                      <legend className="text-center header" id="adp">
                        New Post
                        </legend>
                      <div className="form-group">
                        <span className="col-md-1 col-md-offset-2 text-center">
                          <i id="icons" className="fa fa-user bigicon"></i>
                        </span>
                        <input
                          onChange={this.onChange("title")}
                          name="title"
                          type="text"
                          placeholder="Title"
                          className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                        <span className="col-md-1 col-md-offset-2 text-center">
                          <i id="icons" className="fa fa-user bigicon"></i>
                        </span>
                        <input
                          onChange={this.onChange("image")}
                          name="image"
                          type="text"
                          placeholder="Image URL"
                          className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                        <span className="col-md-1 col-md-offset-2 text-center">
                          <i id="icons" className="fa fa-pencil-square-o bigicon"></i>
                        </span>
                        <textarea
                          onChange={this.onChange("content")}
                          name="content"
                          type="text"
                          placeholder="Post content..."
                          className="form-control"
                          rows="7"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <Button
                          onClick={this.submitPost}
                          variant='contained'
                          style={{ backgroundColor: '#328284', color: '#fff' }}
                        >
                          Submit Post
                            </Button>
                      </div>
                    </fieldset>
                  </form>
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

export default CreatePost;