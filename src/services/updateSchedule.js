import { api } from './api';

export const updateSchedule = async (
  scheduleId,
  date,
  service,
) => {
  return await api.put(`/user/${scheduleId}`, {
    date,
    service,
  });
};
