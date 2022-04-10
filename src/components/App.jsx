import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { createAsyncView } from 'services/HelpFunctions';

const HomePage = createAsyncView('HomePage');
const MoviesPage = createAsyncView('MoviesPage');
const MovieDetailsPage = createAsyncView('MovieDetailsPage');
const MovieDetailsCast = createAsyncView('MovieDetailsCast');
const MovieDetailsReviews = createAsyncView('MovieDetailsReviews');
const NotFoundPage = createAsyncView('NotFoundPage');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieDetailsCast />} />
          <Route path="reviews" element={<MovieDetailsReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
