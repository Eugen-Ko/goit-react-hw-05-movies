import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const APIKEY = 'b92378d38e08a011f12d0395062a656e';
const SEARCH_QUERY = `/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false`;

export async function fetchTrending() {
  const response = await axios.get(`/trending/all/day?api_key=${APIKEY}`);
  return response.data;
}

export async function fetchMovieDetails(moviesId) {
  const response = await axios
    .get(`/movie/${moviesId}?api_key=${APIKEY}&language=en-US`)
    .catch(function (error) {
      return error.response.status;
    });
  return response === 404 ? response : response.data;
}

export async function fetchMovieCast(moviesId) {
  const response = await axios.get(
    `movie/${moviesId}/credits?api_key=${APIKEY}&language=en-US`
  );
  return response.data;
}

export async function fetchMovieReviews(moviesId) {
  const response = await axios
    .get(`/movie/${moviesId}/reviews?api_key=${APIKEY}&language=en-US&page=1`)
    .catch(function (error) {
      return error.response.status;
    });
  return response === 404 ? response : response.data;
}

export async function fetchSearchMovies(searchQuery) {
  const response = await axios
    .get(`${SEARCH_QUERY}&query=${searchQuery}&language=en&page=1`)
    .catch(function (error) {
      return error.response.status;
    });
  return response === 404 ? response : response.data;
}
