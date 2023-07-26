import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import ElseMoviesCard from "../ElseMoviesCard/ElseMoviesCard";
import { filteringMovies } from "../../utils/filteringMovies";
import { useEffect, useState, useContext } from "react";

export default function SavedMovies({
  setIsLoading,
  loggedIn,
  foundMovies,
  handleLikedMovie,
  savedMovies,
  handleDislikeMovie,
  setSavedMovies,
}) {
  const [renderingMovies, setRenderingMovies] = useState([]);
  const [searchError, setSearchError] = useState({ isError: false, text: "" });

  const onLocalMoviesSearch = (searchParams) => {
    const filterResult = filteringMovies(
      savedMovies,
      searchParams,
      setSearchError
    );
    setRenderingMovies(filterResult);
  };

  useEffect(() => {
    setRenderingMovies(savedMovies);
  }, [savedMovies]);

  return (
    <>
      <Header type="saved-movies" loggedIn={loggedIn} />
      <div className="full-height">
        <main className="page">
          <SearchForm
            handleSearchSubmit={onLocalMoviesSearch}
            isGlobalSearch={false}
            setSearchError={setSearchError}
          />
          <MoviesCardList
            searchedMovies={renderingMovies}
            searchError={searchError}
            handleLikedMovie={handleLikedMovie}
            savedMovies={savedMovies}
            handleDislikeMovie={handleDislikeMovie}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
