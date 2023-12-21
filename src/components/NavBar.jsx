import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="bg-blue-gray mb-4 p-4 flex justify-between items-center rounded-lg">
      <div className="text-white font-bold text-lg">
        BitTest
      </div>
      <div className="ml-[100px] flex-grow text-left">
        Моя организация
      </div>
      <div className="text-white border-2 border-gray-800 rounded-md items-center p-2 hidden sm:flex">
        <div className="bg-slate-500 p-2 mx-1 rounded-full">
          <FontAwesomeIcon icon={faUser} className="w-[25px]"/>
        </div>
        <div className="ml-2">
          <p>Вы авторизованы</p>
          <p className="font-bold">Администратор</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

