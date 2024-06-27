import { NavLink, useLocation } from 'react-router-dom';

const Subnavbar = () => {
  const location = useLocation();

  return (
    <div className="w-full h-12 bg-[#17181D] flex justify-center items-center border-t-[0.1px] border-t-white fixed top-[70px] left-0 z-20">
      <NavLink
        exact
        to='/'
        className="px-4 mx-2 text-white hover:text-gray-300 transition-colors duration-300"
        activeClassName="text-[#e09145]"
        style={{ color: location.pathname === '/' ? '#e09145' : 'white' }}
      >
        Accueil
      </NavLink>
      <NavLink
        to='/addarticle'
        className="px-4 text-white hover:text-gray-300 transition-colors duration-300"
        activeClassName="text-[#e09145]"
        style={{ color: location.pathname === '/addarticle' ? '#e09145' : 'white' }}
      >
        Ajouter article
      </NavLink>
      <NavLink
        to='/about'
        className="px-4 mx-2 text-white hover:text-gray-300 transition-colors duration-300"
        activeClassName="text-[#e09145]"
        style={{ color: location.pathname === '/about' ? '#e09145' : 'white' }}
      >
        A propos
      </NavLink>
    </div>
  );
};

export default Subnavbar;
