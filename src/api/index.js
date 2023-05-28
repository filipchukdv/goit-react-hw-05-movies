import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjg4MTliMjUyOTAxOTkxMWIzMjg4MTRkYjI1MmQ4YSIsInN1YiI6IjY0NWI3NmVhNmFhOGUwMDE3MzgxYThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u-ISzx_Hinkash-iFun779963DCpn6SaHRZhNpXKq9A';

export const fetchTrending = () => {
  return axios.get('trending/movie/week').then(response => response.data);
};

export const fetchQuery = query => {
  return axios
    .get('search/movie', {
      params: {
        query,
      },
    })
    .then(response => response.data);
};

export const fetchMovie = id => {
  return axios.get(`movie/${id}`).then(response => response.data);
};

export const fetchCredits = id => {
  return axios.get(`movie/${id}/credits`).then(response => response.data);
};

export const fetchReviews = id => {
  return axios.get(`movie/${id}/reviews`).then(response => response.data);
};
