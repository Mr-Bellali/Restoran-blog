import Blogpost from "../components/Blogpost";
import Category from "../components/Category";

const Home = () => {
  return (
    <section className="w-full h-full flex flex-col items-center  ">
      <div className="w-full h-[55px]  flex flex-row pl-3 justify-start items-center overflow-x-auto no-scrollbar ">
        <div className="flex space-x-2 no-scrollbar">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
      <div className="w-full h-full  flex flex-col items-center justify-start py-3">
        <Blogpost />
        <Blogpost />
      </div>
    </section>
  );
};

export default Home;
