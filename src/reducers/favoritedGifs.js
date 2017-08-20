import {
  ADD_GIF_TO_FAVORITES,
  REMOVE_GIF_FROM_FAVORITES
} from '../utils/constants'

const initialState = {
  items: []
}

const favoritedGifs = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GIF_TO_FAVORITES:
      return {
        items: [...state.items, action.payload.item]
      }
    case REMOVE_GIF_FROM_FAVORITES:
      return {
        items: state.items.filter(item => item.id !== action.payload.item.id )
      }
    default:
      return state
  }
}

export default favoritedGifs;
