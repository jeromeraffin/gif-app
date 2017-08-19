const initialState = {
  searchParameter: '',
  loading: false,
  loaded: false,
  error: null,
  items: [],
  page: 0,
  loadingPage: false
}

const gifs = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MORE_GIFS_REQUEST':
      return {
        ...state,
        loadingPage: true
      }
    case 'FETCH_MORE_GIFS_SUCCESS':
      return {
        ...state,
        loadingPage: false,
        page: state.page + 1,
        items: [
          ...state.items,
          ...action.payload.items
        ]
      }
    case 'FETCH_GIFS_REQUEST':
      return {
        ...state,
        loading: true,
        searchParameter: action.payload.searchParameter
      }
    case 'FETCH_GIFS_SUCCESS':
      return {
        ...state,
        page: 1,
        items: action.payload.items,
        loaded: true,
        loading: false
      }
    case 'FETCH_GIFS_FAILURE':
      return {
        ...state,
        error: 'Can\'t get gifs, sorry'
      }
    case 'CLEAR_SEARCH':
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
