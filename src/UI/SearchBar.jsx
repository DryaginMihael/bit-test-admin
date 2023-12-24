import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="SearchBar mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center border-2 border-gray-800 rounded-md px-5 py-2"
      >
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
        <input
          type="text"
          placeholder="Поиск"
          value={searchTerm}
          onChange={(e) => {
            const search = e.target.value;
            setSearchTerm(search);
            onSearch(search);
          }}
          className="flex-grow pl-5 bg-transparent text-white outline-none w-full"
        />
        <button type="submit" className="hidden">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
