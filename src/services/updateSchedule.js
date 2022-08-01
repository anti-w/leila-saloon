import { api } from './api';

export const updateSchedule = async (
  scheduleId,
  date,
  service,
) => {
  return await api.put(`/schedule/update/${scheduleId}`, {
    date,
    service,
  });
};
