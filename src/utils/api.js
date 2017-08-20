import axios from 'axios';

const API_KEY = 'dc6zaTOxFJmzC';
const SEARCH_API = 'https://api.giphy.com/v1/gifs/search';
const LIMIT = '20'

export const fetchGifs = (value, page) => {
  return axios.get(SEARCH_API, {
    params: {
      q: value,
      api_key: API_KEY,
      limit: LIMIT,
      offset: (page - 1) * LIMIT
    }
  })
}
