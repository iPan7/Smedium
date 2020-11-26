import React, { Component } from "react";
import Save from "./Save";
import ButtonAppBar from "./ButtonAppBar";
import '../style/CreatePost.css';
import { connect } from 'react-redux';
import API from "../../../utils/API";
import Button from '@material-ui/core/Button';

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
            const post = {
                title,
                content,
                image
            };
            API.createPost(post)
                .then(data => {
                    console.log(data);
                    this.setState({
                        postSubmitted: true,
                    });
                });
        }
    };

    render() {
        console.log(this.props);
        return (
            <>
                <ButtonAppBar />
                {!this.state.postSubmitted ? (
                    <div className="container">
                        <div className="row d-flex justify-content-center" >
                            <div id="div-col-md-6" className="col-md-6 ">
                                <div className="row">
                                    <div className="col-md-12">
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
                                                        />
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


export default connect(mapStateToProps)(CreatePost);
