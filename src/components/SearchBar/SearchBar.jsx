import { FaSearch } from 'react-icons/fa';
import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    e.target.reset();
  };
  handleChange = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
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
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
