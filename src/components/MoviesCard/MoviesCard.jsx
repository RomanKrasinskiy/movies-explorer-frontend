import "./MoviesCard.css";
import { BASE_URL_MOVIES } from "../../utils/constants";

export default function MoviesCard({
  movie,
  savedMovies,
  handleLikedMovie,
  handleDislikeMovie,
}) {
  const imageURl = movie.image.url
    ? `${BASE_URL_MOVIES}${movie.image.url}`
    : movie.image;

  const openTrailer = () => {
    window.open(movie.trailerLink, "_blank", "noreferrer");
  };

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const checkLikeButton = (movie, savedMovies) => {
    return savedMovies.some((savedMovie) => savedMovie.id === movie.id)
      ? true
      : false;
  };
  const isLiked = checkLikeButton(movie, savedMovies);

  const handleLikeClick = () => {
    if (isLiked) {
      const savedMovieId = savedMovies.find((obj) => obj.id === movie.id)._id;

      handleDislikeMovie(savedMovieId);
    } else {
      handleLikedMovie(movie);
    }
  };

  const cardLikeButtonClassName = `card-button-status ${
    isLiked && "card__saved"
  }`;

  return (
    <li className="card">
      <p className="card__title">{movie.nameRU}</p>
      <p className="card__duration">{formatDuration(movie.duration)}</p>
      <button
        type="button"
        onClick={handleLikeClick}
        className={cardLikeButtonClassName}
      ></button>
      <img
        src={imageURl}
        alt={movie.title}
        className="card__img"
        onClick={openTrailer}
      />
    </li>
  );
}
