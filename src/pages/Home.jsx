import { useEffect, useState } from "react";
import Blogpost from "../components/Blogpost";
import Category from "../components/Category";
import { getArticles } from '../services/articleService';
import { getCategories } from "../services/categoryService";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticlesAndCategories = async () => {
      try {
        const [articlesData, categoriesData] = await Promise.all([getArticles(), getCategories()]);
        console.log("Fetched Articles Data: ", articlesData);
        console.log("Fetched Categories Data: ", categoriesData);
        setArticles(articlesData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchArticlesAndCategories();
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => String(cat.id) === String(categoryId));
    console.log("Category ID: ", categoryId, "Category: ", category);
    return category ? category.name : "Unknown";
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => String(cat.id) === String(categoryId));
    console.log("Category ID: ", categoryId, "Category: ", category);
    return category ? category.color : "#E64A19";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full h-full flex flex-col items-center">
      <div className="w-full h-[55px] flex flex-row pl-3 justify-start items-center overflow-x-auto no-scrollbar">
        <div className="flex space-x-2 no-scrollbar">
          {categories.map(category => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-start py-3">
        {articles.map(article => (
          <Blogpost
            key={article.id}
            article={article}
            categoryName={getCategoryName(article.category_id)}
            categoryColor={getCategoryColor(article.category_id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
