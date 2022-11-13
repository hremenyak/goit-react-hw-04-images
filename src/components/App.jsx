import { useEffect, useReducer } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { fetchImages } from 'services/api';
import SearchBar from './SearchBar';
import Loader from './Loader';
import Button from './Button';
import ImageGallery from './ImageGallery';
import { reducer, ACTIONS } from '../helpers/reducer';

const initialState = {
  query: '',
  images: [],
  isLoading: false,
  page: 1,
  totalHits: 0,
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { query, images, isLoading, page, totalHits } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: ACTIONS.FETCH_INIT });

      try {
        const { hits, totalHits } = await fetchImages(query, page);
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { hits, totalHits } });
        if (!hits.length) {
          toast.warn("Sorry... we haven't found any pictures.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            toastId: nanoid(),
          });
        }
      } catch {
        dispatch({ type: ACTIONS.FETCH_FAILURE });
      }
    };
    if (!query) {
      return;
    } else {
      fetchData();
    }
  }, [page, query]);

  const handleSubmit = query => {
    dispatch({ type: ACTIONS.SUBMIT, payload: query });
  };

  const loadMore = () => {
    dispatch({ type: ACTIONS.LOAD_MORE });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ToastContainer />
      <ImageGallery items={images} />
      <Loader loading={isLoading} />
      {totalHits > 0 && <Button loadMore={loadMore} />}
      <GlobalStyle />
    </div>
  );
};
