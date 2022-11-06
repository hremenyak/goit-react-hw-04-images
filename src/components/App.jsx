import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { fetchImages } from 'services/api';
import SearchBar from './SearchBar';
import Loader from './Loader';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Modal from './Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    modalImage: '',
    isLoading: false,
    showModal: false,
    totalHits: 0,
    page: 1,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const data = await fetchImages(query, page);

        this.setState(state => ({
          images: page === 1 ? [...data.hits] : [...state.images, ...data.hits],

          totalHits:
            page === 1
              ? data.totalHits - data.hits.length
              : data.totalHits - [...state.images, ...data.hits].length,
        }));
      } catch (error) {
        this.setState({
          error: 'Sorry... Seems like an error occured. Try again later.',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  toggleModal = modalImage => {
    if (!modalImage) {
      this.setState({ modalImage: '', showModal: false });
      return;
    }
    this.setState({ showModal: !this.state.showModal, modalImage });
  };
  render() {
    const { images, isLoading, modalImage, showModal, totalHits } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery items={images} openModal={this.toggleModal} />

        <Loader loading={isLoading} />
        {!!images.length && !!totalHits && <Button loadMore={this.loadMore} />}
        {showModal && (
          <Modal modalImage={modalImage} closeModal={this.toggleModal} />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
