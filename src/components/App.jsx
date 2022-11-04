import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import SearchBar from './SearchBar';
import Loader from './Loader';

export class App extends Component {
  render() {
    return (
      <div>
        <div> Gallery</div>
        <SearchBar />
        <Loader />
        <GlobalStyle />
      </div>
    );
  }
}
