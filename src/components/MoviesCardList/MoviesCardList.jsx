import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import ElseMoviesCard from "../ElseMoviesCard/ElseMoviesCard";
import { DEVICE_PARAMS } from "../../utils/constants";

export default function MoviesCardList({
  searchedMovies,
  searchError,
  handleLikedMovie,
  savedMovies,
  handleDislikeMovie,
  plase,
}) {
  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);
  const [renderingMovies, setRenderingMovies] = useState({
    renderingItemsCount: DEVICE_PARAMS.mobile.cards.total,
    renderingMoreItemsCount: DEVICE_PARAMS.mobile.cards.more,
    searchedMovies: searchedMovies,
  });

  const handleLoadElseCard = () => {
    const newCount = (renderingMovies.renderingItemsCount +=
      renderingMovies.renderingMoreItemsCount);
    setRenderingMovies({ ...renderingMovies, renderingItemsCount: newCount });
  };

  useEffect(() => {
    setRenderingMovies({ ...renderingMovies, searchedMovies: searchedMovies });
  }, [searchedMovies]);

  const checkScreenSize = () => {
    const width = window.screen.width;
    if (width >= DEVICE_PARAMS.desktop.minWidth) {
      setRenderingMovies({
        ...renderingMovies,
        renderingItemsCount: DEVICE_PARAMS.desktop.cards.total,
        renderingMoreItemsCount: DEVICE_PARAMS.desktop.cards.more,
      });
    } else if (width >= DEVICE_PARAMS.tablet.minWidth) {
      setRenderingMovies({
        ...renderingMovies,
        renderingItemsCount: DEVICE_PARAMS.tablet.cards.total,
        renderingMoreItemsCount: DEVICE_PARAMS.tablet.cards.more,
      });
    } else {
      setRenderingMovies({
        ...renderingMovies,
        renderingItemsCount: DEVICE_PARAMS.mobile.cards.total,
        renderingMoreItemsCount: DEVICE_PARAMS.mobile.cards.more,
      });
    }
  };
  useEffect(() => {
    setRenderingMovies({ ...renderingMovies, searchedMovies: searchedMovies });
    checkScreenSize(deviceWidth);
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <section className="movies-cardlist">
        <ul className="movies-cardlist__container">
          {searchedMovies
            .slice(0, renderingMovies.renderingItemsCount)
            .map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  handleLikedMovie={handleLikedMovie}
                  savedMovies={savedMovies}
                  handleDislikeMovie={handleDislikeMovie}
                  plase={plase}
                />
              );
            })}
        </ul>
        <div className="movies-cardlist__info-container">
          {searchError.isError && (
            <p className="movies-cardlist__error">{searchError.text}</p>
          )}
        </div>
      </section>
      {searchedMovies.length > renderingMovies.renderingItemsCount && (
        <ElseMoviesCard
          isActive={true}
          handleLoadElseCard={handleLoadElseCard}
        />
      )}
    </>
  );
}
