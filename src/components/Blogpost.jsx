const Blogpost = () => {
  return (
    <div className="w-[330px] h-[350px] rounded-[15px] overflow-hidden relative mb-7 shadow-2xl border-2 border-teal-400">
      <div className="w-full h-[50%]  ">
        <img src="Chun-Li.jpg" alt="" />
      </div>
      <div className="w-full h-full bg-white rounded-tl-[15px] rounded-tr-[15px] absolute top-[162px] flex flex-col p-3">
        <div className="w-[120px] h-[25px] rounded-full bg-teal-400 flex justify-center items-center">
          <h2 className="text-white text-[16px] font-light">Category 2</h2>
        </div>
        <div>
          <h1 className="text-[24px] font-bold">
            Chun-Li
          </h1>
        </div>
        <div>
          <h2 className="text-[20px] font-normal">
            A fictional character from Street fighter game
          </h2>
        </div>
        <div>
          <button type="button" className="text-[16px] underline mt-5">
              read now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
