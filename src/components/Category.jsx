import React from "react";

const Category = ({ category, onClick, isSelected }) => {
  return (
    <div
      className={`w-[120px] h-[30px] rounded-full flex items-center justify-center text-white my-2 mr-3 cursor-pointer`}
      style={{ backgroundColor: isSelected ? category.color : "#808080" }}
      onClick={onClick}
    >
      {category.name}
    </div>
  );
};

export default Category;
