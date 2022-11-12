import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    e.target.reset();
  };

  const handleChange = e => {
    const query = e.target.value;
    setQuery(query);
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <FaSearch />
          </button>

          <input
            className="SearchForm-input"
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
