import { useState, useMemo, useCallback, memo } from 'react';
import Pagination from '../../components/Pagination';
import { PAGE_SIZE, TOTAL_USERS, USERS_TABLE_CONFIG } from './consts';
import { useGetAllUsersQuery } from '../../store/services/users';
import Table from '../../UI/Table';
import modifyUsers from './helper';
import Spinner from '../../UI/Spinner';

function UserList({ openDrawer, searchStr }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState('desc');

  const {
    data: usersData,
    isLoading,
    error,
  } = useGetAllUsersQuery({
    pageSize: PAGE_SIZE,
    searchStr,
    page: currentPage,
  });

  const users = useMemo(
    () => modifyUsers(usersData, { searchStr, sortType }),
    [usersData, searchStr, sortType],
  );

  const toggleSortType = useCallback(() => {
    setSortType((prevSortType) => (prevSortType === 'desc' ? 'asc' : 'desc'));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <>Oh no, there was an error</>;
  }

  return (
    <div className="UserList mt-8 flex flex-col -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 min-w-full sm:px-6 lg:px-8">
      {users.length ? (
        <Table
          data={users}
          config={{
            ...USERS_TABLE_CONFIG,
            handlers: { onClick: openDrawer, onSort: toggleSortType },
            options: { sortType },
          }}
        />
      ) : (
        <h2>Not found</h2>
      )}
      <Pagination
        total={searchStr ? users.length : TOTAL_USERS}
        itemsPerPage={PAGE_SIZE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default memo(UserList);
