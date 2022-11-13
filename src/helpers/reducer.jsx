import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ACTIONS = {
  SUBMIT: 'submit',
  LOAD_MORE: 'load_more',
  FETCH_INIT: 'fetch_init',
  FETCH_SUCCESS: 'fetch_success',
  FETCH_FAILURE: 'fetch_failure',
};

export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SUBMIT:
      return { ...state, query: payload, page: 1, images: [], totalHits: 0 };
    case ACTIONS.LOAD_MORE:
      return { ...state, page: state.page + 1 };
    case ACTIONS.FETCH_INIT:
      return { ...state, isLoading: true };
    case ACTIONS.FETCH_SUCCESS:
      return state.page === 1
        ? {
            ...state,
            isLoading: false,
            images: payload.hits,
            totalHits: payload.totalHits - payload.hits.length,
          }
        : {
            ...state,
            isLoading: false,
            images: [...state.images, ...payload.hits],
            totalHits:
              payload.totalHits - [...state.images, ...payload.hits].length,
          };

    case ACTIONS.FETCH_FAILURE:
      toast.error('Oops... Something went wrong, try again later.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        toastId: nanoid(),
      });
      return { ...state, isLoading: false };
    default:
      throw new Error('Oops, it seems like an error occurred.');
  }
}
