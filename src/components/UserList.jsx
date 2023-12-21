import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencilAlt,
    faTrash,
    faArrowDown,
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../UI/SearchBar";
import useDebounce from "../hooks/useDebounce";

const UserList = ({ users, onSearch, sortType, onSort, openDrawer }) => {
    const handleSearch = useDebounce(onSearch, 200);

    return (
        <div className="UserList">
            <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-left mb-6">
                    Моя организация
                </h1>
                <hr className="-mx-4 sm:-mx-6 lg:-mx-8 border-slate-800" />
                <h1 className="text-3xl font-bold text-left mt-4">
                    Пользователи
                </h1>
                <SearchBar onSearch={handleSearch} />
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-gray-200">
                                {users.length ? (
                                    <table className="min-w-full text-nowrap overflow-hidden rounded-lg">
                                        <thead className="bg-dark">
                                            <tr className="text-xs font-medium text-gray-500 tracking-wider">
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3"
                                                >
                                                    Email
                                                </th>
                                                <th scope="col">Имя</th>
                                                <th scope="col">Роль</th>
                                                <th scope="col">Подписка</th>
                                                <th
                                                    scope="col"
                                                    onClick={() =>
                                                        onSort(
                                                            sortType === "desc"
                                                                ? "asc"
                                                                : "desc"
                                                        )
                                                    }
                                                >
                                                    Токены
                                                    {sortType === "desc" ? (
                                                        <FontAwesomeIcon
                                                            className="ml-1 cursor-pointer"
                                                            title="По возрастанию"
                                                            icon={faArrowUp}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            className="ml-1 cursor-pointer"
                                                            title="По убыванию"
                                                            icon={faArrowDown}
                                                        />
                                                    )}
                                                </th>
                                                <th scope="col">Действия</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800 whitespace-nowrap text-sm text-gray-100">
                                            {users.map((user) => (
                                                <tr
                                                    key={user.id}
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        openDrawer(user)
                                                    }
                                                >
                                                    <td className="px-6 py-4">
                                                        {user.email}
                                                    </td>
                                                    <td>{user.name}</td>
                                                    <td>{user.role}</td>
                                                    <td>{user.subscription}</td>
                                                    <td>{user.token}</td>
                                                    <td>
                                                        <FontAwesomeIcon
                                                            icon={faPencilAlt}
                                                            className="px-1 text-sky-500 cursor-pointer"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                            className="px-1 text-sky-500 cursor-pointer"
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <h2>Ничего не найдено</h2>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
