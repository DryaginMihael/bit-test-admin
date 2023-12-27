import { useState, memo } from 'react';

function Pagination({ total, itemsPerPage, currentPage, onPageChange }) {
  const [page, setPage] = useState(currentPage);
  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className="Pagination flex items-center justify-center mt-5 space-x-2">
      <button
        className={`px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-blue ${
          page === 1 ? 'text-gray-400' : ''
        }`}
        type="button"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        &laquo;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue ${
            page === index + 1 ? 'bg-blue-500' : ''
          }`}
          type="button"
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`px-4 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-blue ${
          page === totalPages ? 'text-gray-400' : ''
        }`}
        onClick={() => handlePageChange(page + 1)}
        type="button"
        disabled={page === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

export default memo(Pagination);
