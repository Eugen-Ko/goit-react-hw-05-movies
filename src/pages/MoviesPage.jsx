import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrending } from 'services/services';
import { Title } from './PageStyles.styles';

export const MoviesPage = () => {
  const [trandingMovies, setTrandingMovies] = useState(null);

  const normalize = data => {
    return data.results.map(movie => {
      if (!movie.title) movie.title = movie.name;
      return movie;
    });
  };

  useEffect(() => {
    fetchTrending().then(data => setTrandingMovies(normalize(data)));
  }, []);

  return (
    <>
      <Title>Trending today</Title>

      {trandingMovies && (
        <ul>
          {trandingMovies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
