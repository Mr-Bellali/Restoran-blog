import api from './api';

const getCategories = async () => {
  const response = await api.get('/categories');
  console.log("category response: ", response.data)
  return response.data;
};

export { getCategories };
