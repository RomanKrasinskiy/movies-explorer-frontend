import { API_MAIN_CONFIG } from '../utils/constants';
import { chechResponse } from '../utils/chechResponse';

export const signUp = async ({ name, email, password }) => {
  const res = await fetch(API_MAIN_CONFIG.signUp, {
    method: 'POST',
    headers: API_MAIN_CONFIG.headers,
    body: JSON.stringify({
      name: `${name}`,
      password: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return chechResponse(res);
};

export const signIn = async ({ email, password }) => {
  const res = await fetch(API_MAIN_CONFIG.signIn, {
    method: 'POST',
    headers: API_MAIN_CONFIG.headers,
    credentials: 'include',
    body: JSON.stringify({
      password: `${password}`,
      email: `${email}`
    }),
  });
  return chechResponse(res);
};

export const signOut = async () => {
  const res = await fetch(API_MAIN_CONFIG.signOut, {
    method: 'DELETE',
    headers: API_MAIN_CONFIG.headers,
    credentials: 'include',
  });
  return chechResponse(res);
};

export const checkToken = async () => {
  const res = await fetch(API_MAIN_CONFIG.user, {
    method: 'GET',
    headers: API_MAIN_CONFIG.headers,
    credentials: 'include',
  });
  return chechResponse(res);
};

