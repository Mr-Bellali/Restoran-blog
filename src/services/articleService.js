import api from './api';

const getArticles = async () => {
  const response = await api.get('/articles');
  return response.data;
};

const getArticleById = async (id) => {
  const response = await api.get(`/articles/${id}`);
  return response.data;
};

const createArticle = async (article) => {
  const response = await api.post('/articles', article);
  return response.data;
};

const updateArticle = async (id, article) => {
  const response = await api.put(`/articles/${id}`, article);
  return response.data;
};

const deleteArticle = async (id) => {
  await api.delete(`/articles/${id}`);
};



export { getArticles, getArticleById, createArticle, updateArticle, deleteArticle };
