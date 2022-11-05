import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import SearchBar from './SearchBar';
import { fetchImages } from 'api/api';
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
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      const images = await fetchImages(query, page);

      this.setState(state => ({
        images: [...state.images, ...images],
        isLoading: false,
      }));
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  toggleModal = modalImage => {
    this.setState({ showModal: !this.state.showModal, modalImage });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <Loader loading={this.state.isLoading} />
        <ImageGallery items={this.state.images} openModal={this.toggleModal} />
        {!!this.state.images.length && <Button loadMore={this.loadMore} />}
        {this.state.showModal && (
          <Modal
            modalImage={this.state.modalImage}
            closeModal={this.toggleModal}
          />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
