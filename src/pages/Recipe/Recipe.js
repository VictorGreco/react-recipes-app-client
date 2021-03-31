import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Recipe.scss";
import Header from "../../components/Header";
import CardTime from "../../components/CardTime";
import Difficulty from "../../components/Difficulty";
import Serves from "../../components/Serves";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Label from "../../components/Label";
import TextArea from "../../components/TextArea";
import HomeEmptyContent from "../../components/HomeEmptyContent";
import RecipeCommentsCount from "../../components/RecipeCommentsCount";
import RecipeComments from "../../components/RecipeComments";
import makePrefix from "../../utils/make-prefix";

import {
  makeRecipeSelector,
  recipesStateSelector,
} from "../../redux/recipes/recipes-selectors";

import { currentUserStateSelector } from "../../redux/user/user-selectors";

function Recipe() {
  const { recipeID } = useParams();
  const [comment, setComment] = useState("");
  const [showForm, setShowForm] = useState(false);

  const recipesState = useSelector(recipesStateSelector);
  const currentUserState = useSelector(currentUserStateSelector);

  const recipeSelector = useMemo(makeRecipeSelector, []);
  const recipe = useSelector((state) => recipeSelector(state, recipeID));

  const {
    _id,
    name,
    difficulty,
    image,
    description,
    serves,
    hoursToPrep,
    minutesToPrep,
    author: { name: authorName, lastname: authorLastname } = {},
    ingredients,
    comments,
    votes,
  } = recipe;

  const {
    recipeLoading,
    recipeLoadingError,
    recipeFetched,
    recipeUpdating,
    recipeUpdatingError,
  } = recipesState;

  const { isAuthenticated } = currentUserState;

  // useEffect(() => {
  //   if (_id) {
  //     dispatch the fetchRecipe(_id) action...;
  //   }
  // }, [dispatch, _id]);

  const prefix = makePrefix("recipe");

  function handleAddComment(e) {
    e.preventDefault();

    if (comment !== "") {
      // dispatch the addRecipeComment(_id, comment) action;
      setComment("");
      setShowForm(false);
    }
  }

  function handleUpVoteRecipe() {
    // dispatch the upVoteRecipe(recipeID) action...;
  }

  function handleDownVoteRecipe() {
    // dispatch the downVoteRecipe(recipeID) action...;
  }

  return (
    <div className="Recipe d-flex flex-column min-vh-100">
      <Header />
      <main className="d-flex flex-column flex-shrink-0 flex-grow-1">
        {recipeFetched ? (
          <>
            <header className="container">
              <div className="row flex-column align-items-center Recipe__Header">
                {recipeLoading && (
                  <div className="col col-lg-10 mt-4 mb-4 mt-sm-5 mb-sm-5">
                    <p>Cargando receta...</p>
                  </div>
                )}
                {recipeLoadingError && (
                  <div className="col col-lg-10 mt-4 mb-4 mt-sm-5 mb-sm-5">
                    <p>Vaya algo ha salido mal...</p>
                    <p>{recipeLoadingError}</p>
                  </div>
                )}
                {recipeFetched && (
                  <div className="col col-lg-10">
                    <div className="row flex-column flex-lg-row row-cols-lg-2 align-items-lg-center">
                      <div className="col Recipe__ImgWrapper">
                        <img src={image} alt="" className="Recipe__Img" />
                      </div>
                      <div className="col Recipe__Content">
                        <p className="text-muted text-uppercase Recipe__Subhead">
                          {Array.isArray(comments) && (
                            <RecipeCommentsCount commentsArr={comments} />
                          )}
                        </p>

                        <h1 className="h2">{name}</h1>
                        <p>{description}</p>
                        <div className="d-flex">
                          <div className="mr-4">
                            <Button
                              disabled={recipeLoading || !isAuthenticated}
                              onClick={handleDownVoteRecipe}
                              variant="dark"
                            >
                              Down Vote {votes.downVotes}
                            </Button>
                          </div>
                          <div>
                            <Button
                              disabled={recipeLoading || !isAuthenticated}
                              onClick={handleUpVoteRecipe}
                              variant="dark"
                            >
                              Up Vote {votes.upVotes}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </header>
            <section className="container">
              <div className="row justify-content-lg-center">
                <div className="col col-lg-10">
                  <div className="row flex-lg-row-reverse">
                    <div className="col-12 col-lg-6">
                      <div className="row row-cols-2">
                        <div className="col">
                          <CardTime
                            hoursToPrep={hoursToPrep}
                            minutesToPrep={minutesToPrep}
                          />
                        </div>
                        <div className="col">
                          <Difficulty difficulty={difficulty} />
                        </div>
                        <div className="col">
                          <Serves serves={serves} />
                        </div>
                        <div className="col">
                          <h2 className="text-muted text-uppercase Recipe__Subhead">
                            Receta de:
                          </h2>
                          <p>
                            {authorName} {authorLastname}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      {Array.isArray(ingredients) && ingredients.length > 0 && (
                        <>
                          <p className="text-muted text-uppercase Recipe__Subhead">
                            Ingredientes:
                          </p>
                          <ul className="ml-n3">
                            {ingredients.map((ingr, i) => (
                              /* eslint-disable-next-line react/no-array-index-key */
                              <li key={i}>{ingr}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="container">
              <div className="row justify-content-lg-center Recipe__CommentsWrapper">
                <div className="col col-lg-10">
                  <div className="d-sm-flex flex-column flex-sm-row justify-content-sm-between">
                    <h2>Comentarios</h2>
                    {isAuthenticated && (
                      <Button
                        additionalClasses="mt-2 mt-sm-0 ml-sm-auto"
                        onClick={() => setShowForm(true)}
                        selector-testid={prefix("new-comment")}
                      >
                        Nuevo Comentario
                      </Button>
                    )}
                  </div>
                  {isAuthenticated && showForm && (
                    <div className="mt-4">
                      <hr />
                      <h4 className="mb-3">Nuevo comentario</h4>
                      <form onSubmit={handleAddComment}>
                        <Label htmlFor="textarea">Comentario</Label>
                        <TextArea
                          placeholder="Comentario"
                          rows="4"
                          selector-testid={prefix("textarea")}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <Button
                          htmlType="submit"
                          additionalClasses="mt-3"
                          disabled={recipeUpdating}
                          selector-testid={prefix("send-comment")}
                        >
                          Enviar
                        </Button>
                        {recipeUpdatingError && (
                          <div className="bg-warning p-3 mt-3">
                            <p className="text-dark mb-0">
                              {recipeUpdatingError}
                            </p>
                          </div>
                        )}
                      </form>
                    </div>
                  )}
                  <div>
                    <hr />
                    {Array.isArray(comments) && comments.length > 0 ? (
                      <RecipeComments comments={comments} />
                    ) : (
                      <p>No hay comentarios disponibles</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="container">
            <div className="row flex-column align-content-center">
              <div className="col col-lg-10">
                <HomeEmptyContent
                  title="Todavía no hay contenido"
                  subhead="Contenido secundario"
                />
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Recipe;
