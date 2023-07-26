import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { getLikedMovies } from "../../utils/MainApi";
import { filteringMovies } from "../../utils/filteringMovies";
import { getMoviesApi } from "../../utils/MoviesApi";
import { useEffect, useState } from "react";

export default function Movies({
  setIsLoading,
  loggedIn,
  handleLikedMovie,
  savedMovies,
  handleDislikeMovie,
  setSavedMovies,
  searchedMovies,
  setSearchedMovies,
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [searchError, setSearchError] = useState({ isError: false, text: "" });

  useEffect(() => {
    if (!loggedIn) {
      return;
    }
    getLikedMovies()
      .then((favMovies) => {
        setSavedMovies(favMovies);
      })
      .catch(() =>
        setSearchError({
          isError: true,
          text: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
        })
      );
  }, [loggedIn]);

  const getAllMovies = () => {
    setIsLoading(true);
    return new Promise((res, rej) => {
      if (allMovies.length > 0) {
        res(allMovies);
      } else {
        getMoviesApi()
          .then((movies) => {
            setAllMovies(movies);
            res(movies);
          })
          .catch(() => {
            rej(
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            );
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    });
  };

  // производим поиск по массиву и сохраняем состояние
  const handleSearchMovies = (searchParams) => {
    setIsLoading(true);
    getAllMovies()
      .then((movies) => {
        const filterResult = filteringMovies(
          movies,
          searchParams,
          setSearchError
        );
        setSearchedMovies(filterResult);
      })
      .catch((err) => {
        setSearchError({
          isError: true,
          text: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header type="movies" loggedIn={loggedIn} />
      <div className="full-height">
        <main className="page">
          <SearchForm
            handleSearchSubmit={handleSearchMovies}
            isGlobalSearch={true}
            setSearchError={setSearchError}
          />
          <MoviesCardList
            searchedMovies={searchedMovies}
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
