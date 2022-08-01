import { api } from './api';

export const deleteSchedule = async (scheduleId) => {
  const token = localStorage.getItem('token');

  return await api.delete(
    `/schedule/delete/${scheduleId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
