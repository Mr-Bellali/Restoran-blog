import { useState, useEffect } from "react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import { v4 as uuidv4 } from 'uuid';
import { getCategories } from "../services/categoryService";
import { createArticle } from "../services/articleService";
import axios from "axios";
import { showError, showSuccess } from "../utils/notifications";
import { ToastContainer } from "react-toastify";

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dmoosgavw/image/upload";
const cloudinaryPreset = "ndvxj3sl"; 

const AddarticleForm = () => {
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories: ", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file)); 
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", cloudinaryPreset);

      const response = await axios.post(cloudinaryUrl, formData);
      const uploadedImageUrl = response.data.secure_url;
      setImageUrl(uploadedImageUrl);

      console.log("Uploaded Image URL:", uploadedImageUrl);
    } catch (error) {
      console.error("Error uploading image to Cloudinary: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const article = {
      id: uuidv4(),
      title: formData.get("articleName"),
      category_id: formData.get("category"),
      description: formData.get("description"),
      ingredients: formData.get("ingredient").split("\n"),
      cook_method: formData.get("method"),
      image: imageUrl,
    };

    try {
      const createdArticle = await createArticle(article);
      console.log("Created Article:", createdArticle);
      showSuccess("Article created successfully!");
      e.target.reset();
      setImageUrl("");
      setImagePreview(null); 
    } catch (error) {
      console.error("Error creating article: ", error);
      showError("Failed to create article. Please try again.");
    }
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit} className="p-4 flex flex-col items-center">
        <div className="w-full h-fit flex flex-col mb-4">
          <label htmlFor="articleName" className="text-lg">
            Article Title
          </label>
          <input
            type="text"
            id="articleName"
            name="articleName"
            className="border-[1px] border-gray-300 bg-gray-100 rounded-[5px] h-[40px] p-2 text-lg"
            placeholder="Enter article name"
            required
          />
        </div>
        <div className="w-full h-fit flex flex-col mb-4">
          <label htmlFor="category" className="text-lg">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="border-[1px] border-gray-300 bg-gray-100 rounded-[5px] h-[40px] p-2 text-lg"
            required
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full h-fit flex flex-col mb-4">
          <label htmlFor="description" className="text-lg">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="border-[1px] border-gray-300 bg-gray-100 rounded-[5px] h-[40px] p-2 text-lg"
            placeholder="Enter description"
            required
          />
        </div>
        <div className="w-full h-fit flex flex-col mb-4">
          <label htmlFor="ingredient" className="text-lg">
            Ingredients
          </label>
          <textarea
            id="ingredient"
            name="ingredient"
            rows={4}
            className="border-[1px] border-gray-300 bg-gray-100 rounded-[5px] p-2 text-lg"
            placeholder="Enter ingredients"
            required
          />
        </div>
        <div className="w-full h-fit flex flex-col mb-4">
          <label htmlFor="method" className="text-lg">
            How to make it
          </label>
          <textarea
            id="method"
            name="method"
            rows={4}
            className="border-[1px] border-gray-300 bg-gray-100 rounded-[5px] p-2 text-lg"
            placeholder="Enter method"
            required
          />
        </div>
        
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />

        <div className="w-full h-fit flex flex-col mb-4 items-end">
          <label htmlFor="image" className="cursor-pointer">
            <button
              type="button"
              className="w-[45px] h-[45px] rounded-[15px] bg-[#292c35]"
              onClick={() => document.getElementById('image').click()}
            >
              <AddPhotoAlternateRoundedIcon
                sx={{ color: "white", fontSize: "28px" }}
              />
            </button>
          </label>
        </div>
        
        {imagePreview && (
          <div className="w-full h-fit flex flex-col mb-4 items-center">
            <img src={imagePreview} alt="Image Preview" className="w-[200px] h-[200px] object-cover" />
          </div>
        )}

        <div className="w-full h-fit flex flex-col mb-4 justify-center items-center">
          <button
            type="submit"
            className="w-[188px] h-[57px] rounded-[15px] bg-[#E09145] text-xl text-white font-semibold"
          >
            Add Article
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddarticleForm;
