import { Component } from 'react';
import { fetchImages } from 'api/api';
import Button from 'components/Button';
// import Loader from 'components/Loader';
import '../styles.css';

class SearchBar extends Component {
  state = {
    query: null,
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    console.log('update');

    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      // this.setState({ isLoading: true });
      const images = await fetchImages(query, page);
      this.props.onSubmit(images);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const query = e.target.query.value;
    this.setState({ query, page: 1 });
    e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
        <div>
          <Button loadMore={this.loadMore} />
        </div>
      </header>
    );
  }
}

export default SearchBar;
