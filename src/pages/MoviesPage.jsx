import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BoxSearch,
  ButtonSearch,
  FormSearch,
  InputSearch,
} from './PageStyles.styles';
import { fetchSearchMovies } from 'services/services';

export const MoviesPage = () => {
  const location = useLocation();

  let query = new URLSearchParams(location.search).get('query');

  const [searchQuery, setSearchQuery] = useState(query ? query : null);
  const [searchList, setSearchList] = useState(null);
  const [pending, setPending] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery) {
      location.search = null;
      setSearchList(null);
      return;
    }

    setPending(false);

    fetchSearchMovies(searchQuery).then(data => {
      setPending(true);
      return data.total_results
        ? setSearchList(data.results)
        : setSearchList(0);
    });
  }, [location, searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    query = e.target[0].value.toLowerCase().trim();
    setSearchQuery(query);
    navigate({
      ...location,
      search: `query=${query}`,
    });
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
              <Link to={`${movie.id}`} state={`/movies/${location.search}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
