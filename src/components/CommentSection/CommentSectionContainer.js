// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = props => {
  // Add state for the comments
  const [comments] =  useState(props.comments);
  // console.log(`this is props `, props.comments); 
  

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(function(a){
        // console.log(`this is a`, a);
       return <Comment comment={a}/>
      })}

      <CommentInput />      
    </div>
  );
};

export default CommentSection;
