import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/articleService";

const Blogger = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleData = await getArticleById(id);
        setArticle(articleData);
      } catch (error) {
        console.error("Error fetching article: ", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-4">{article.title}</h1>
      <div className="my-4 flex justify-center">
        <img src={article.image} alt={article.title} className="rounded-lg shadow-lg" />
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Description</h2>
      <p className="text-lg leading-7 text-gray-700">{article.description}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Ingredients</h2>
      <ul className="list-disc list-inside ml-6 text-lg text-gray-700">
        {article.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cook Method</h2>
      <p className="text-lg leading-7 text-gray-700">{article.cook_method}</p>
    </div>
  );
};

export default Blogger;
