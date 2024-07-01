import { Link } from "react-router-dom";

const Blogpost = ({ article, categoryName, categoryColor }) => {
  const { id, title, description, image, ingredients, cook_method } = article;
  
  return (
    <div className="w-[330px] h-[350px] rounded-[15px] overflow-hidden relative mb-7 shadow-2xl border-2" style={{ borderColor: categoryColor }}>
      <div className="w-full h-[50%]">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="w-full h-full bg-white rounded-tl-[15px] rounded-tr-[15px] absolute top-[162px] flex flex-col p-3">
        <div className="w-[120px] h-[25px] rounded-full flex justify-center items-center" style={{ background: categoryColor }}>
          <h2 className="text-white text-[16px] font-semibold">{categoryName}</h2>
        </div>
        <div>
          <h1 className="text-[18px] font-bold">
            {title}
          </h1>
        </div>
        <div>
          <h2 className="text-[16px] font-normal leading-5 mt-1">
            {description}
          </h2>
        </div>
        <div className="absolute right-[247px] top-[150px]">
          <Link to={`/blogger/${id}`} className="text-[16px] underline mt-5">
            read now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
