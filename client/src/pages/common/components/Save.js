import React from "react";
import Pdf from "react-to-pdf";
import "../style/CreatePost.css";

const ref = React.createRef();
const Saveas = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title}></img>
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="button" onClick={toPdf}>
            Save your Post
          </button>
        )}
      </Pdf>
    </>
  );
};
export default Saveas;
