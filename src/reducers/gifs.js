import {
  CLEAR_SEARCH,
  COPY_GIF_URL_REQUEST,
  COPY_GIF_URL_SUCCESS,
  FETCH_GIFS_REQUEST,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_FAILURE,
  FETCH_NEW_GIFS_PAGE_REQUEST,
  FETCH_NEW_GIFS_PAGE_SUCCESS
} from '../utils/constants'


const initialState = {
  searchParameter: '',
  loading: false,
  loaded: false,
  error: null,
  items: [],
  page: 0,
  loadingPage: false,
  copied: false
}

const gifs = (state = initialState, action) => {
  switch(action.type) {
    case COPY_GIF_URL_REQUEST:
      return {
        ...state,
        copied: true
      }
      case COPY_GIF_URL_SUCCESS:
        return {
          ...state,
          copied: false
        }
    case FETCH_NEW_GIFS_PAGE_REQUEST:
      return {
        ...state,
        loadingPage: true
      }
    case FETCH_NEW_GIFS_PAGE_SUCCESS:
      return {
        ...state,
        loadingPage: false,
        page: state.page + 1,
        items: [
          ...state.items,
          ...action.payload.items
        ]
      }
    case FETCH_GIFS_REQUEST:
      return {
        ...state,
        loading: true,
        searchParameter: action.payload.searchParameter
      }
    case FETCH_GIFS_SUCCESS:
      return {
        ...state,
        page: 1,
        items: action.payload.items,
        loaded: true,
        loading: false
      }
    case FETCH_GIFS_FAILURE:
      return {
        ...state,
        error: 'Can\'t get gifs, sorry'
      }
    case CLEAR_SEARCH:
      return {
        ...initialState,
        searchParameter: '',
        loaded: false
      }
    default:
      return state
  }
}

export default gifs;
