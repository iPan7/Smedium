import React from "react";
import Save from "react-to-pdf";
import '../style/CreatePost.css';

const ref = React.createRef();
const Saveas = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title}></img>
        <p>{props.content}</p>
      </div>
      <Save targetRef={ref} filename="Post.Save">
        {({ toSave }) => (
          <button className="button" onClick={toSave}>
            Save your Post
          </button>
        )}
      </Save>
    </>
  );
};
export default Saveas;
