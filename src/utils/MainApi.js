import { API_MAIN_CONFIG, BASE_URL_MOVIES } from '../utils/constants';
import { chechResponse } from '../utils/chechResponse';

export const getLikedMovies = async () => {
  const res = await fetch(API_MAIN_CONFIG.movies, {
    headers: API_MAIN_CONFIG.headers,
    credentials: 'include',
  })
  return chechResponse(res);
}

export const getInfoProfile = async () => {
  const res = await fetch(API_MAIN_CONFIG.user, {
    headers: API_MAIN_CONFIG.headers,
    credentials: 'include',
  })
  return chechResponse(res);
}
export const editInfoProfile = async ({ name, email }) => {
  const res = await fetch(API_MAIN_CONFIG.user, {
    method: 'PATCH',
    headers: API_MAIN_CONFIG.headers,
    credentials: 'include',
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    }),

  })
  return chechResponse(res);
}

export const sendSavedMovie = async (movie) => {
  const { country,
    director,
    duration,
    year,
    description,
    trailerLink,
    nameRU,
    nameEN, } = movie;
  const image = BASE_URL_MOVIES + movie.image.url;
  const thumbnail = BASE_URL_MOVIES + movie.image.formats.thumbnail.url;
  const id = movie.id;
  const res = await fetch(API_MAIN_CONFIG.movies, {
    method: 'POST',
    headers: API_MAIN_CONFIG.headers,
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      id,
      nameRU,
      nameEN,
    }),
    credentials: 'include',
  });
  return chechResponse(res);
};
export const dislikeMovie = async (id) => {
  const res = await fetch(`${API_MAIN_CONFIG.movies}/${id}`, {
    method: 'DELETE',
    headers: API_MAIN_CONFIG.headers,
    credentials: 'include',
  });
  return chechResponse(res);
};
