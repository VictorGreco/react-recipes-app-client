import React from "react";

function RecipeComments({ comments = [] }) {
  return comments.map((comment) => (
    <div key={comment._id} className="Recipe__Comment">
      <p className="Recipe__Comment__Author">
        {comment && comment.author && comment.author.name}{" "}
        {comment && comment.author && comment.author.lastname}
      </p>
      <p>{comment.body}</p>
    </div>
  ));
}

export default RecipeComments;
