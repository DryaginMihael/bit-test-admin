import { useState } from 'react';
import UserList from '../modules/UserList';
import Drawer from '../components/Drawer';
import SearchBar from '../UI/SearchBar';
import useDebounce from '../hooks/useDebounce';
import Heading from '../UI/Heading';
import UserProfile from '../modules/UserProfile';

function Admin() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchStr, setSearchStr] = useState('');
  const handleSearch = useDebounce(setSearchStr, 200);

  const openDrawer = (user) => {
    setIsDrawerOpen(true);
    setCurrentUser(user);
  };

  return (
    <div className="Admin bg-blue-gray sm:rounded-lg sm:m-6 py-6 px-4 sm:px-6 lg:px-8">
      <Heading text="My organization" />
      <hr className="-mx-4 mt-6 mb-4 sm:-mx-6 lg:-mx-8 border-slate-800" />
      <Heading text="Users" className="mb-6" />
      <SearchBar onSearch={handleSearch} />
      <UserList openDrawer={openDrawer} searchStr={searchStr} />
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={currentUser?.email}
      >
        <UserProfile user={currentUser} />
      </Drawer>
    </div>
  );
}

export default Admin;
