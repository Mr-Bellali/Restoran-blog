import React, { useState, useEffect } from "react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import { getCategories } from "../services/categoryService";
import { createArticle } from "../services/articleService";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react"; // Import Cloudinary components
import axios from "axios";

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/do8izhje4/image/upload";

const AddarticleForm = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, []);

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    // Upload image to Cloudinary
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "your_upload_preset"); // Replace with your upload preset

      const response = await axios.post(cloudinaryUrl, formData);
      const imageUrl = response.data.secure_url;

      // Set the image URL in state or do something with it
      console.log("Uploaded Image URL:", imageUrl);
    } catch (error) {
      console.error("Error uploading image to Cloudinary: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const article = {
      title: formData.get("articleName"),
      category_id: formData.get("category"),
      description: formData.get("description"),
      ingredients: formData.get("ingredient"),
      cook_method: formData.get("method"),
      image: formData.get("image"), // Replace with imageUrl from Cloudinary
    };

    try {
      const createdArticle = await createArticle(article);
      console.log("Created Article:", createdArticle);
      // Reset form or show success message
      alert("Article created successfully!");
    } catch (error) {
      console.error("Error creating article: ", error);
      alert("Failed to create article. Please try again.");
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
        
        {/* Hidden file input */}
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
        <div className="w-full h-fit flex flex-col mb-4 justify-center items-center">
          <button
            type="submit"
            className="w-[188px] h-[57px] rounded-[15px] bg-[#E09145] text-xl text-white font-semibold"
          >
            Add Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddarticleForm;
