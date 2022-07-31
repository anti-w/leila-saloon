import { api } from './api';

export const createSchedule = async (
  userId,
  userName,
  date,
  service,
) => {
  try {
    const { data } = await api.post(
      `/user/${userId}/schedule`,
      {
        userName,
        date,
        service,
      },
    );
    alert(data.msg);
  } catch ({ response }) {
    alert(response.data.msg);
  }
};
