import { useState, useMemo } from 'react';
import Pagination from "../components/Pagination";
import UserList from "../components/UserList";
import { USERS, PAGE_SIZE } from "../consts";
import NavBar from '../components/NavBar';

function Admin() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchStr, setSearchStr] = useState('');
    const [sortType, setSortType] = useState('desc');
    const users = useMemo(() => {
      const offset = (currentPage - 1) * PAGE_SIZE;
      return USERS.sort((user1, user2) => {
        const diff = parseInt(user1.token) - parseInt(user2.token);
        return sortType === 'desc' ? - diff : diff; 
      }).filter((user) => {
        if (!searchStr) return user;
        return user.name.toLowerCase().includes(searchStr.toLowerCase());
      }).slice(offset, offset + PAGE_SIZE);
    }, [currentPage, searchStr, sortType]);

    return (
        <div className="Admin min-h-full">
            <NavBar />
            <UserList users={users} onSearch={setSearchStr} sortType={sortType} onSort={setSortType}/>
            <Pagination
                total={USERS.length}
                itemsPerPage={10}
                currentPage={1}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default Admin;
