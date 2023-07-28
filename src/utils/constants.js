// const MAIN_URL = 'http://localhost:3001';

const MAIN_URL = 'https://api.kinomovies.nomoredomains.monster';
export const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

export const API_MOVIES_CONFIG = {
  url: `${BASE_URL_MOVIES}/beatfilm-movies`,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
  },
}
export const API_MAIN_CONFIG = {
  movies: `${MAIN_URL}/movies`,
  user: `${MAIN_URL}/users/me`,
  signUp: `${MAIN_URL}/signup`,
  signIn: `${MAIN_URL}/signin`,
  signOut: `${MAIN_URL}/signout`,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
  },
}

export const REGEX_NAME = /^[a-zA-ZА-Яа-яЁё'\- ]{2,}$/
export const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export const SHORTS_DURATION = 40

export const DEVICE_PARAMS = {
  desktop: {
    minWidth: 1280,
    cards: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    minWidth: 768,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    minWidth: 480,
    cards: {
      total: 5,
      more: 2,
    },
  },
};