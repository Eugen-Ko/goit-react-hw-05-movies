import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const APIKEY = 'b92378d38e08a011f12d0395062a656e';

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

// export async function fetchBooks() {
//   const response = await axios.get('/books');
//   return response.data;
// }

// export async function fetchBookById(bookId) {
//   const response = await axios.get(`/books/${bookId}?_expand=author`);
//   return response.data;
// }
