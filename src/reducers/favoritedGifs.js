const initialState = {
  items: []
}

const favoritedGifs = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_GIF':
      return {
        items: [...state.items, action.payload.item]
      }
    case 'REMOVE_GIF':
      return {
        items: state.items.filter(item => item.id !== action.payload.item.id )
      }
    default:
      return state
  }
}

export default favoritedGifs;
