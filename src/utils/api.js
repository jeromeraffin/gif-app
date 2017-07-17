import axios from 'axios';

const API_KEY = 'f1b4b174107842ac849c69d6bf473d44';
const SEARCH_API = 'http://api.giphy.com/v1/gifs/search';

const fetchGifs = (value) => {
  return axios.get(SEARCH_API, {
    params: {
      q: value,
      api_key: API_KEY,
      limit: '20'
    }
  }).then(({data}) => data.data)
}

export default fetchGifs;
