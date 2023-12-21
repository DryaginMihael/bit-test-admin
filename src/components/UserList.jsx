import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencilAlt,
    faTrash,
    faChevronDown,
    faChevronUp,
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../UI/SearchBar";

const UserList = ({ users, onSearch, sortType, onSort }) => {
    return (
        <div className="text-white bg-blue-gray rounded-lg">
            <div className="py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-left mb-6">
                    <FontAwesomeIcon icon={faBriefcase} />
                    Моя организация
                </h1>
                <hr className="sm:-mx-6 lg:-mx-8  border-slate-800"/>
                <h1 className="text-3xl font-bold text-left mt-4">
                    Пользователи
                </h1>
                <SearchBar onSearch={onSearch} />
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
                                {users.length ? (
                                    <table className="min-w-full">
                                        <thead className="bg-dark">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
                                                >
                                                    Имя
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden sm:table-cell px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
                                                >
                                                    Роль
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden sm:table-cell px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
                                                >
                                                    Подписка
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden sm:table-cell px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
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
                                                            icon={faChevronUp}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            className="ml-1 cursor-pointer"
                                                            title="По убыванию"
                                                            icon={faChevronDown}
                                                        />
                                                    )}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden sm:table-cell px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
                                                >
                                                    Действия
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800">
                                            {users.map((user) => (
                                                <tr
                                                    key={user.id}
                                                    className="cursor-pointer"
                                                    onClick={() => {}}
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                                        {user.name}
                                                    </td>
                                                    <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                                                        {user.role}
                                                    </td>
                                                    <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                                                        {user.subscription}
                                                    </td>
                                                    <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                                                        {user.token}
                                                    </td>
                                                    <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium">
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
