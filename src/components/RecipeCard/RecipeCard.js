import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { string } from "prop-types";

import "./RecipeCard.scss";
import CardTime from "../CardTime";
import Difficulty from "../Difficulty";
import Serves from "../Serves";
import ROUTES from "../../utils/routes";

function RecipeCard({ recipeID }) {
  const recipe = {
    _id: "_id",
    name: "name",
    difficulty: "difficulty",
    image: "image",
    serves: 4,
    hoursToPrep: 4,
    minutesToPrep: 4,
  };

  const {
    _id,
    name,
    difficulty,
    image,
    serves,
    hoursToPrep,
    minutesToPrep,
  } = recipe;

  const classes = cn("RecipeCard", "col");

  return (
    <div className={classes}>
      <div className="RecipeCard__ImgWrapper">
        <img src={image} alt="" className="RecipeCard__Img" />
      </div>
      <div className="RecipeCard__Content">
        <Link
          to={`${ROUTES.RECIPES}/${_id}`}
          data-testid={`recipe-card-${_id}`}
          className="card-link"
        >
          <h3 className="RecipeCard__Title">{name}</h3>
        </Link>
        <div className="RecipeCard__Info">
          <CardTime hoursToPrep={hoursToPrep} minutesToPrep={minutesToPrep} />
          <Difficulty difficulty={difficulty} />
          <Serves serves={serves} />
        </div>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipeID: string.isRequired,
};

export default RecipeCard;
