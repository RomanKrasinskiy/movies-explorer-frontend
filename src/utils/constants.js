// const mainURL = 'http://localhost:3001';

const mainURL = 'https://api.kinomovies.nomoredomains.monster';
export const baseURLMovies = 'https://api.nomoreparties.co';

export const apiMoviesConfig = {
  url: `${baseURLMovies}/beatfilm-movies`,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
  },
}
export const apiMainConfig = {
  url: mainURL, // если не пригодится- удалить!
  movies: `${mainURL}/movies`,
  user: `${mainURL}/users/me`,
  signUp: `${mainURL}/signup`,
  signIn: `${mainURL}/signin`,
  signOut: `${mainURL}/signout`,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
  },
}

export const regex_name = /^[a-zA-ZА-Яа-яЁё'\- ]{2,}$/
export const regex_email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

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