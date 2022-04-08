import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from 'services/services';
import undefined from 'pages/image/undefined.jpg';

const imgPath = 'https://image.tmdb.org/t/p/w500';
// --- for HomePage -------------------------
export const useFetchTrending = () => {
  const [trandingMovies, setTrandingMovies] = useState(null);

  const normalize = data => {
    return data.results.map(movie => {
      if (!movie.title) movie.title = movie.name;
      return movie;
    });
  };

  useEffect(() => {
    moviesApi.fetchTrending().then(data => setTrandingMovies(normalize(data)));
  }, []);

  return trandingMovies;
};

// --- for MovieDetailsPage --------------
export const useFetchMovieDetails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const normalize = data => {
      if (data === 404) {
        return data;
      }
      const {
        genres,
        overview,
        vote_average,
        release_date,
        title,
        name,
        poster_path,
      } = data;

      return {
        ...data,
        posterPatch: poster_path ? `${imgPath}${poster_path}` : undefined,
        movieName: title ? title : name,
        yearRelease: release_date
          ? release_date.slice(0, 4)
          : 'Nevidomo, ta i ne cikavut',
        userScore: vote_average ? parseFloat(vote_average) * 10 : 'Fignya',
        owerView: overview ? overview : 'Nema scho kazatu',
        genresToString: genres.map(el => el.name).join(', '),
      };
    };

    moviesApi.fetchMovieDetails(moviesId).then(normalize).then(setMovieDetails);
  }, [moviesId]);
  return movieDetails;
};

// --- for MovieDetailCast -------------------
export const useFetchMovieCast = () => {
  const [castList, setCastList] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieCast(moviesId).then(data => setCastList(data.cast));
  }, [moviesId]);
  return castList;
};

// --- for MovieDetailReviews -------------------
export const useFetchMovieReviews = () => {
  const [reviewsDetail, setReviewsDetails] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieReviews(moviesId).then(data => {
      console.log(data);
      if (data.total_results === 0) {
        console.log(data.total_results);
        return setReviewsDetails(404);
      } else {
        console.log(data.result);
        return setReviewsDetails(data.results);
      }
    });
  }, [moviesId]);
  return reviewsDetail;
};
