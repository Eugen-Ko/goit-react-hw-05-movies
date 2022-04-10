import { Link } from 'react-router-dom';
import { Title } from './PageStyles.styles';
import { useFetchTrending } from 'hooks/Hooks';

export const HomePage = () => {
  const trandingMovies = useFetchTrending();
  localStorage.setItem('parent', '/');

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
