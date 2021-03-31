import * as RecipesTypes from "./recipes-types";

const RecipesInitialState = {
  recipesLoading: false,
  recipesLoadingError: null,
  recipesFetched: false,
  recipeLoading: false,
  recipeLoadingError: null,
  recipeFetched: false,
  recipeUpdating: false,
  recipeUpdatingError: null,
  votes: {
    upVotes: 0,
    downVotes: 0,
  },
  byID: {},
  ids: [],
};

function RecipesReducer(state = RecipesInitialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default RecipesReducer;
