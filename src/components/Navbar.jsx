import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Navbar = () => {
  return (
    <div className="w-full h-[70px] bg-[#17181D] flex flex-row fixed top-0 left-0 z-20">
      <div className="w-[20%]">

      </div>
      <div className="w-[60%] h-full flex items-center justify-center">
        <h1 className="text-[30px] font-extrabold text-white">
          Restoran blog
        </h1>
      </div>
      <div className="w-[20%] h-full flex justify-end items-center">
        <SearchRoundedIcon sx={{ color: 'white', fontSize:'45px', marginRight: '15px'}}/>
      </div>
    </div>
  );
};

export default Navbar;
