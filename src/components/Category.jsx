
const Category = ({ category }) => {
  console.log("category;component category:", category)
  return (
    <div className="w-[120px] h-[30px] rounded-full bg-gray-400 flex items-center justify-center text-white my-2 mr-3">
      {category.name}
    </div>
  )
}

export default Category 
