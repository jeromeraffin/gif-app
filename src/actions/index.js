import { fetchGifs } from '../utils/api';
import copy from 'copy-to-clipboard';

import {
  CLEAR_SEARCH,
  COPY_GIF_URL_REQUEST,
  COPY_GIF_URL_SUCCESS,
  FETCH_GIFS_REQUEST,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_FAILURE,
  ADD_GIF_TO_FAVORITES,
  REMOVE_GIF_FROM_FAVORITES,
  FETCH_NEW_GIFS_PAGE_REQUEST,
  FETCH_NEW_GIFS_PAGE_SUCCESS
} from '../utils/constants'

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}

export const copyGifUrlRequest = () => {
  return {
    type: COPY_GIF_URL_REQUEST
  }
}

export const copyGifUrlSuccess = () => {
  return {
    type: COPY_GIF_URL_SUCCESS
  }
}

export const copyGifUrl = url => dispatch => {
  dispatch(copyGifUrlRequest());
  copy(url);
  setTimeout(() => {
    dispatch(copyGifUrlSuccess());
  }, 500);
}

export const sendSearch = (searchParameter, page) => dispatch => {
  if (page > 1) {
    dispatch(fetchNewGifsPageRequest(searchParameter, page));
    return fetchGifs(searchParameter, page)
      .then(({ data }) => dispatch(fetchNewGifsPageSuccess(data)))
      .catch(error => dispatch(fetchGifsFailure(error)));
  }

  dispatch(fetchGifsRequest(searchParameter, page));
  return fetchGifs(searchParameter, page)
    .then(({ data }) => dispatch(fetchGifsSuccess(data)))
    .catch(error => dispatch(fetchGifsFailure(error)));
}

export const fetchGifsRequest = searchParameter => {
  return {
    type: FETCH_GIFS_REQUEST,
    payload: {
      searchParameter
    }
  }
}

export const fetchGifsSuccess = data => {
  return {
    type: FETCH_GIFS_SUCCESS,
    payload: {
      items: data.data,
      totalGifs: data.pagination.total_count
    }
  }
}

export const fetchNewGifsPageRequest = () => {
  return {
    type: FETCH_NEW_GIFS_PAGE_REQUEST
  }
}

export const fetchNewGifsPageSuccess = data => {
  return {
    type: FETCH_NEW_GIFS_PAGE_SUCCESS,
    payload: {
      items: data.data,
      totalGifs: data.pagination.total_count
    }
  }
}

export const fetchGifsFailure = error => {
  return {
    type: FETCH_GIFS_FAILURE,
    payload: {
      error
    }
  }
}

export const toggleFavorites = gifClicked => (dispatch, getState) => {
  if (getState().favoritedGifs.items.find(gif => gif.id === gifClicked.id) !== undefined) {
    dispatch(removeGifFromFavorites(gifClicked));
  }
  else {
    dispatch(addGifToFavorites(gifClicked))
  }
}

export const addGifToFavorites = item => {
  return {
    type: ADD_GIF_TO_FAVORITES,
    payload: {
      item
    }
  }
}

export const removeGifFromFavorites = item => {
  return {
    type: REMOVE_GIF_FROM_FAVORITES,
    payload: {
      item
    }
  }
}
