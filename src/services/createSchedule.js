import { api } from './api';

export const createSchedule = async (
  userId,
  userName,
  date,
  service,
) => {
  try {
    const { data } = await api.post(
      `/schedule/create/${userId}`,
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
