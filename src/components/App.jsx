import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';
import { fetchImages } from 'services/api';
import SearchBar from './SearchBar';
import Loader from './Loader';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Modal from './Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);

      try {
        const data = await fetchImages(query, page);
        if (!data.hits.length) {
          toast.warn('Sorry... we have not found any pictures.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        }
        if (page === 1) {
          setImages(data.hits);

          return;
        } else {
          setImages(prevImages => [...prevImages, ...data.hits]);
        }
      } catch (e) {
        toast.error('Oops... Something went wrong, try again later.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } finally {
        setIsloading(false);
      }
    };
    if (!query) {
      return;
    } else {
      fetchData();
    }
  }, [page, query]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = modalImage => {
    if (!modalImage) {
      setModalImage('');
      setIsModalOpen(false);

      return;
    }

    setIsModalOpen(!isModalOpen);
    setModalImage(modalImage);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ToastContainer />
      <ImageGallery items={images} openModal={toggleModal} />
      <Loader loading={isLoading} />
      {!!images.length && <Button loadMore={loadMore} />}
      {isModalOpen && (
        <Modal modalImage={modalImage} closeModal={toggleModal} />
      )}
      <GlobalStyle />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     modalImage: '',
//     isLoading: false,
//     showModal: false,
//     totalHits: 0,
//     page: 1,
//     error: null,
//   };

//   async componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;

//     if (prevState.query !== query || prevState.page !== page) {
//       this.setState({ isLoading: true });
//       try {
//         const data = await fetchImages(query, page);

//         this.setState(state => ({
//           images: page === 1 ? [...data.hits] : [...state.images, ...data.hits],

//           totalHits:
//             page === 1
//               ? data.totalHits - data.hits.length
//               : data.totalHits - [...state.images, ...data.hits].length,
//         }));
//       } catch (error) {
//         this.setState({
//           error: 'Sorry... Seems like an error occured. Try again later.',
//         });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   handleSubmit = query => {
//     this.setState({ query, page: 1, images: [] });
//   };

//   loadMore = () => {
//     this.setState(state => ({ page: state.page + 1 }));
//   };

//   toggleModal = modalImage => {
//     if (!modalImage) {
//       this.setState({ modalImage: '', showModal: false });
//       return;
//     }
//     this.setState({ showModal: !this.state.showModal, modalImage });
//   };
//   render() {
//     const { images, isLoading, modalImage, showModal, totalHits } = this.state;
//     return (
//       <div>
//         <SearchBar onSubmit={this.handleSubmit} />
//         <ImageGallery items={images} openModal={this.toggleModal} />

//         <Loader loading={isLoading} />
//         {!!images.length && !!totalHits && <Button loadMore={this.loadMore} />}
//         {showModal && (
//           <Modal modalImage={modalImage} closeModal={this.toggleModal} />
//         )}
//         <GlobalStyle />
//       </div>
//     );
//   }
// }
