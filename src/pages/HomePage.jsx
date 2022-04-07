import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/services';
import { Title } from './PageStyles.styles';

export const HomePage = () => {
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
      {!trandingMovies && <h1>Loading...</h1>}
      {trandingMovies && (
        <ul>
          {trandingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
