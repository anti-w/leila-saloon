import { api } from './api';

export const signUser = (user) => {
  return api.post('/auth/login', user);
};
