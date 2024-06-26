// components/Subnavbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Subnavbar = () => {
  return (
    <div className='w-full h-12 bg-[#17181D] flex justify-center items-center'>
      <NavLink
        exact
        to='/'
        className='px-4 py-2 mx-2 text-white hover:text-gray-300 transition-colors duration-300'
        activeClassName='text-[#e09145]'
      >
        Accueil
      </NavLink>
      <NavLink
        to='/ajouter'
        className='px-4 py-2 mx-2 text-white hover:text-gray-300 transition-colors duration-300'
        activeClassName='text-[#e09145]'
      >
        Ajouter article
      </NavLink>
      <NavLink
        to='/a-propos'
        className='px-4 py-2 mx-2 text-white hover:text-gray-300 transition-colors duration-300'
        activeClassName='text-[#e09145]'
      >
        A propos
      </NavLink>
    </div>
  );
};

export default Subnavbar;
