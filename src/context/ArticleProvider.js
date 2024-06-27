import React, { useState, useEffect } from 'react';
import ArticleContext from './ArticleContext';
import { getArticles, createArticle, updateArticle, deleteArticle } from '../services/articleService';

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const addArticle = async (article) => {
    const newArticle = await createArticle(article);
    setArticles([...articles, newArticle]);
  };

  const editArticle = async (id, updatedArticle) => {
    const updated = await updateArticle(id, updatedArticle);
    setArticles(articles.map(article => (article.id === id ? updated : article)));
  };

  const removeArticle = async (id) => {
    await deleteArticle(id);
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <ArticleContext.Provider value={{ articles, addArticle, editArticle, removeArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
