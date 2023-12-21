import { useState, useMemo } from "react";
import Pagination from "../components/Pagination";
import UserList from "../components/UserList";
import { USERS, PAGE_SIZE } from "../consts";
import Drawer from "../components/Drawer";

function Admin() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [searchStr, setSearchStr] = useState("");
    const [sortType, setSortType] = useState("desc");
    const users = useMemo(() => {
        const offset = (currentPage - 1) * PAGE_SIZE;
        const filteredUsers = USERS.sort((user1, user2) => {
            const diff = parseInt(user1.token) - parseInt(user2.token);
            return sortType === "desc" ? -diff : diff;
        }).filter((user) => {
            if (!searchStr) return user;
            return user.name
                .toLowerCase()
                .includes(searchStr.toLowerCase());
        });
        setTotalUsers(filteredUsers.length);
        return filteredUsers.slice(offset, offset + PAGE_SIZE);
    }, [currentPage, searchStr, sortType]);

    const openDrawer = (user) => {
        setIsDrawerOpen(true);
        setCurrentUser(user);
    };

    return (
        <div className="Admin min-h-full bg-blue-gray sm:rounded-lg sm:m-6 py-6">
            <UserList
                users={users}
                onSearch={setSearchStr}
                sortType={sortType}
                onSort={setSortType}
                openDrawer={openDrawer}
            />
            {!!totalUsers && (
                <Pagination
                    total={totalUsers}
                    itemsPerPage={10}
                    currentPage={1}
                    onPageChange={setCurrentPage}
                />
            )}
            <Drawer
                isOpen={isDrawerOpen}
                user={currentUser}
                onClose={() => setIsDrawerOpen(false)}
            />
        </div>
    );
}

export default Admin;
