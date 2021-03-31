function RecipeCommentsCount({ commentsArr = [] }) {
  if (Array.isArray(commentsArr) && commentsArr.length === 0) {
    return "0 comentarios";
  }
  if (Array.isArray(commentsArr) && commentsArr.length === 1) {
    return "1 comentario";
  }
  if (Array.isArray(commentsArr) && commentsArr.length > 1) {
    return `${commentsArr.length} comentarios`;
  }

  return "0 comentarios";
}

export default RecipeCommentsCount;
