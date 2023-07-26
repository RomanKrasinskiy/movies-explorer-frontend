import { apiMainConfig, baseURLMovies } from '../utils/constants';
import { chechResponse } from '../utils/chechResponse';

export const getLikedMovies = async () => {
  const res = await fetch(apiMainConfig.movies, {
    headers: apiMainConfig.headers,
    credentials: 'include',
  })
  return chechResponse(res);
}

export const getInfoProfile = async () => {
  const res = await fetch(apiMainConfig.user, {
    headers: apiMainConfig.headers,
    credentials: 'include',
  })
  return chechResponse(res);
}
export const editInfoProfile = async ({ name, email }) => {
  const res = await fetch(apiMainConfig.user, {
    method: 'PATCH',
    headers: apiMainConfig.headers,
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
  const image = baseURLMovies + movie.image.url;
  const thumbnail = baseURLMovies + movie.image.formats.thumbnail.url;
  const id = movie.id;
  const res = await fetch(apiMainConfig.movies, {
    method: 'POST',
    headers: apiMainConfig.headers,
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
  const res = await fetch(`${apiMainConfig.movies}/${id}`, {
    method: 'DELETE',
    headers: apiMainConfig.headers,
    credentials: 'include',
  });
  return chechResponse(res);
};
