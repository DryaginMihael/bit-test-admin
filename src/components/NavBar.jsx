import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="NavBar bg-blue-gray mx-3 sm:mx-6 my-6 p-4 flex justify-between items-center rounded-lg h-[86px]">
      <div className="font-bold text-lg">BitTest</div>
      <div className="ml-[50px] sm:ml-[100px] flex-grow text-left flex">
        <div className="bg-slate-800 p-2 mx-1 rounded-md h-[25px] w-[25px] flex align-center justify-center">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-blue-500 h-100 line-full -mt-1"
          />
        </div>
        My organization
      </div>
      <div className="border-2 border-gray-800 rounded-md items-center p-2 hidden sm:flex h-[60px]">
        <div className="bg-slate-600 p-2 mx-1 rounded-full">
          <FontAwesomeIcon icon={faUser} className="w-[25px]" />
        </div>
        <div className="ml-2">
          <p className="text-gray-500">You are logged in</p>
          <p className="font-bold">Administrator</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
