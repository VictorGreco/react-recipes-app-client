import React from "react";

import "./Home.scss";
import Header from "../../components/Header";
import RecipeCard from "../../components/RecipeCard";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import HomeEmptyContent from "../../components/HomeEmptyContent";

function Home() {
  const recipes = [];
  const { recipesLoading, recipesLoadingError } = {
    recipesLoading: false,
    recipesLoadingError: null,
  };

  // useEffect(() => {
  //   dispatch(fetchRecipes());
  // }, [dispatch]);

  return (
    <div className="Home d-flex flex-column min-vh-100">
      <Header />
      <main className="d-flex flex-column flex-shrink-0 flex-grow-1">
        <HomeHeader />

        <section className="container">
          <div
            className="row flex-column align-content-center"
            style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
          >
            {recipesLoading && (
              <div className="col col-lg-6 mt-4 mb-4 mt-sm-5 mb-sm-5">
                <p>Cargando recetas...</p>
              </div>
            )}
            {recipesLoadingError && (
              <div className="col col-lg-6 mt-4 mb-4 mt-sm-5 mb-sm-5">
                <p>Vaya algo ha salido mal...</p>
                <p>{recipesLoadingError}</p>
              </div>
            )}
            {!recipesLoading && !recipesLoadingError && (
              <div className="col col-lg-10">
                {recipes.length > 0 ? (
                  <div className="row row-cols-1">
                    {recipes.map((recipe) => (
                      <RecipeCard key={recipe} recipeID={recipe} />
                    ))}
                  </div>
                ) : (
                  <HomeEmptyContent />
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
