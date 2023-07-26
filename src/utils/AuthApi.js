import { apiMainConfig } from '../utils/constants';
import { chechResponse } from '../utils/chechResponse';

export const signUp = async ({ name, email, password }) => {
  const res = await fetch(apiMainConfig.signUp, {
    method: 'POST',
    headers: apiMainConfig.headers,
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
  const res = await fetch(apiMainConfig.signIn, {
    method: 'POST',
    headers: apiMainConfig.headers,
    credentials: 'include',
    body: JSON.stringify({
      password: `${password}`,
      email: `${email}`
    }),
  });
  return chechResponse(res);
};

export const signOut = async () => {
  const res = await fetch(apiMainConfig.signOut, {
    method: 'DELETE',
    headers: apiMainConfig.headers,
    credentials: 'include',
  });
  return chechResponse(res);
};

export const checkToken = async () => {
  const res = await fetch(apiMainConfig.user, {
    method: 'GET',
    headers: apiMainConfig.headers,
    credentials: 'include',
  });
  return chechResponse(res);
};

