import { Link, useNavigate } from 'react-router-dom';
import { useFetchMovies } from 'hooks/Hooks';
import {
  BoxSearch,
  ButtonSearch,
  FormSearch,
  InputSearch,
} from './PageStyles.styles';

export const MoviesPage = () => {
  let navigate = useNavigate();
  const { pending, searchList, location } = useFetchMovies();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value.toLowerCase().trim();
    navigate(`/movies/?query=${query}`);
  };

  return (
    <>
      <BoxSearch>
        <FormSearch onSubmit={e => handleSubmit(e)}>
          <InputSearch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder={`Search movies...`}
          />
          <ButtonSearch type="submit">Search</ButtonSearch>
        </FormSearch>
      </BoxSearch>
      {!pending && <h1>Loading...</h1>}
      {searchList === 0 && <h3>Nothing found</h3>}
      {searchList !== 0 && searchList && (
        <ul>
          {searchList.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={`/movies/${location}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
