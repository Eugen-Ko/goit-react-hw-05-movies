import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BoxSearch,
  ButtonSearch,
  FormSearch,
  InputSearch,
} from './PageStyles.styles';
import { fetchSearchMovies } from 'services/services';

export const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchList, setSearchList] = useState(null);
  const [pending, setPending] = useState(true);
  localStorage.setItem('parent', '/movies');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setPending(false);
    fetchSearchMovies(searchQuery).then(data => {
      setPending(true);
      return data.total_results
        ? setSearchList(data.results)
        : setSearchList(0);
    });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery(e.target[0].value);
  };

  return (
    <>
      <BoxSearch>
        <FormSearch onSubmit={e => handleSubmit(e)}>
          <InputSearch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies..."
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
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
