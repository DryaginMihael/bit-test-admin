import React, { useState } from 'react';

const Pagination = ({ total, itemsPerPage, currentPage, onPageChange }) => {
  const [page, setPage] = useState(currentPage);
  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className="flex items-center justify-center my-5 space-x-2">
      <button
        className={`px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-blue text-white`}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        &laquo;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue text-white ${
            page === index + 1 ? 'bg-blue-500' : ''
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-4 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-blue text-white"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
