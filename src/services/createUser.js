import { api } from './api';

export const createUser = async (dataUser) => {
  try {
    const { data } = await api.post(
      '/user/register',
      dataUser,
    );
    alert(data.msg);
  } catch ({ response }) {
    alert(response.data.msg);
  }
};
