import axios from 'axios';

const API_KEY = 'f1b4b174107842ac849c69d6bf473d44';
const SEARCH_API = 'http://api.giphy.com/v1/gifs/search';
const GIF_API = 'http://api.giphy.com/v1/gifs'

export const fetchGifs = (value) => {
  return axios.get(SEARCH_API, {
    params: {
      q: value,
      api_key: API_KEY,
      limit: '40'
    }
  }).then(({data}) => data.data)
}

export const fetchFavsGifs = (favs) => {
  return axios.get(GIF_API, {
    params: {
      api_key: API_KEY,
      ids: favs.toString()
    }
  }).then(({data}) => data.data)
}
