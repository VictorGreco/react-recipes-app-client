/* eslint-disable consistent-return */

import * as RecipesTypes from "./recipes-types";

import { normalizeRecipes } from "../../schema/recipes-schema";

export const fetchRecipesRequest = () => ({});

export const fetchRecipesError = (errorMessage) => ({});

export const fetchRecipesSuccess = ({ byID, ids }) => ({
  type: RecipesTypes.FETCH_RECIPES_SUCCESS,
  payload: {
    byID: byID,
    ids: ids,
  },
});

export const fetchRecipeRequest = () => ({});

export const fetchRecipeError = (errorMessage) => ({});

export const fetchRecipeSuccess = (recipe) => ({});

export const recipeUpdating = () => ({});

export const recipeUpdatingError = (errorMessage) => ({});

export const addLocalRecipeComment = (recipeID, comment) => ({});

export const upVoteRecipeSuccess = (recipeID) => ({});

export const downVoteRecipeSuccess = (recipeID) => ({});

/**
 * @hint
 *
 * const normalizedRecipes = normalizeRecipes(recipesJson.data);
 *
 * dispatch(
 *   fetchRecipesSuccess({
 *     byID: normalizedRecipes.entities.recipes,
 *     ids: normalizedRecipes.result,
 *   }),
 * );
 */
export function fetchRecipes() {
  return async function fetchRecipesThunk(dispatch) {
    dispatch(fetchRecipesRequest());
  };
}

export function fetchRecipe(recipeID) {
  // return async thunk...
}

/**
 * @hint
 * const token = getState().user.currentUser.token;
 */
export function addRecipeComment(recipeID, commentBody) {
  // return async thunk...
}

/**
 * @hint
 * const token = getState().user.currentUser.token;
 */
export function upVoteRecipe(recipeID) {
  // return async thunk...
}

/**
 * @hint
 * const token = getState().user.currentUser.token;
 */
export function downVoteRecipe(recipeID) {
  // return async thunk...
}
