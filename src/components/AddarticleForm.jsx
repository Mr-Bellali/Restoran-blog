import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
const AddarticleForm = () => {
  return (
    <div className="w-full h-full ">
      <form action="post" className="p-4 flex flex-col items-center ">
        <div className="w-full h-fit  flex flex-col mb-4">
          <label htmlFor="Article name" className="text-lg">
            Article name
          </label>
          <input
            type="text"
            className=" border-[1px] border-gray-300 bg-gray-100 rounded-[5px] h-[40px] p-2 text-lg "
            placeholder="article name here"
          />
        </div>
        <div className="w-full h-fit  flex flex-col mb-4">
          <label htmlFor="Topic" className="text-lg">
            Topic
          </label>
          <input
            type="text"
            className=" border-[1px] bg-gray-100 border-gray-300 rounded-[5px] h-[40px] p-2 text-lg "
            placeholder="topic here"
          />
        </div>
        <div className="w-full h-fit  flex flex-col mb-4">
          <label htmlFor="Headline" className="text-lg">
            Headline for article
          </label>
          <textarea
            rows={4}
            cols={40}
            className=" border-[1px] border-gray-300 bg-gray-100 rounded-[5px]  p-2 text-lg"
            placeholder="Headline here"
            
          />
        </div>
        <div className="w-full h-fit  flex flex-col mb-4  items-end">
          <button
            type="button"
            className="w-[45px] h-[45px] rounded-[15px] bg-[#292c35] "
          >
            <AddPhotoAlternateRoundedIcon
              sx={{ color: "white", fontSize: "28px" }}
            />
          </button>
        </div>
        <div className="w-full h-fit  flex flex-col mb-4 justify-center items-center">
          <button
            type="button"
            className="w-[188px] h-[57px] rounded-[15px] bg-[#E09145] text-xl text-white font-semibold"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddarticleForm;
