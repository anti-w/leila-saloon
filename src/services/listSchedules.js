import { api } from './api';

export const listSchedules = async () => {
  const token = localStorage.getItem('token');
  const userId = JSON.parse(
    localStorage.getItem('user'),
  )._id;

  return await api.get(`/schedule/read/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
