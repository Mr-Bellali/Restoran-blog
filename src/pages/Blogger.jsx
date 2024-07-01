import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteArticle, getArticleById } from "../services/articleService";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { ToastContainer } from "react-toastify";
import { showError, showSuccess } from "../utils/notifications";

const Blogger = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [article, setArticle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleDelete = async () => {
    try {
      await deleteArticle(id);
      showSuccess("Article deleted successfully!");
      setShowPopup(false);
      navigate("/")
    } catch (error) {
      console.error("Error deleting article: ", error);
      showError("Failed to delete article. Please try again.");
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="w-full flex justify-end">
        <button className="hover:cursor-pointer" onClick={togglePopup}>
          <MoreHorizRoundedIcon />
        </button>
        {showPopup && (
          <div ref={popupRef} className="absolute mt-2 right-4 bg-white border border-gray-300 shadow-lg rounded-md p-2">
            <button className="text-red-500 hover:text-red-700" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
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
      <ToastContainer />
    </div>
  );
};

export default Blogger;
