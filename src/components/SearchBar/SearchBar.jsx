import { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: null,
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="Form">
          <button type="submit" className="Button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="Input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
