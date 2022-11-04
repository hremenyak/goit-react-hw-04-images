import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import SearchBar from './SearchBar';
// import Loader from './Loader';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.images !== this.state.images) {
  //     this.setState({ isLoading: false });
  //   }
  // }

  getImages = images => {
    this.setState(prevState => ({ images: [...prevState.images, ...images] }));
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.getImages} />
        <ImageGallery items={this.state.images} />

        <GlobalStyle />
      </div>
    );
  }
}
