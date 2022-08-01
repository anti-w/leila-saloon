import { api } from './api';

export const signUser = (user) => {
  return api.post('/user/login', user);
};
