import { fetchGifs } from '../utils/api';

export const clearSearch = () => {
  return {
    type: 'CLEAR_SEARCH'
  }
}

export const sendSearch = (searchParameter, page) => dispatch => {
  if(page > 1) {
    console.log(page)
    dispatch(fetchMoreGifsRequest(searchParameter, page));
    return fetchGifs(searchParameter, page)
      .then(({data}) => dispatch(fetchMoreGifsSuccess(data.data)))
      .catch(error => dispatch(fetchGifsFailure(error)));
  } else {
    dispatch(fetchGifsRequest(searchParameter, page));
    return fetchGifs(searchParameter, page)
      .then(({data}) => dispatch(fetchGifsSuccess(data.data)))
      .catch(error => dispatch(fetchGifsFailure(error)));
  }
}

export const fetchMoreGifsRequest = () => {
  return {
    type: 'FETCH_MORE_GIFS_REQUEST'
  }
}

export const fetchMoreGifsSuccess = items => {
  return {
    type: 'FETCH_MORE_GIFS_SUCCESS',
    payload: {
      items
    }
  }
}

export const fetchGifsRequest = searchParameter => {
  return {
    type: 'FETCH_GIFS_REQUEST',
    payload: {
      searchParameter
    }
  }
}

export const fetchGifsSuccess = items => {
  return {
    type: 'FETCH_GIFS_SUCCESS',
    payload: {
      items
    }
  }
}

export const fetchGifsFailure = error => {
  return {
    type: 'FETCH_GIFS_FAILURE',
    payload: {
      error
    }
  }
}

export const addGifToFavorites = item => {
  return {
    type: 'ADD_GIF',
    payload: {
      item
    }
  }
}

export const removeGifFromFavorites = item => {
  return {
    type: 'REMOVE_GIF',
    payload: {
      item
    }
  }
}
