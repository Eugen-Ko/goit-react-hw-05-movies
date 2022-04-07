import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/services';
import undefined from './image/undefined.jpg';
import {
  DetailesBox,
  ImageBox,
  InfoBox,
  Image,
  BoxCastReviews,
} from './PageStyles.styles';

export const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const createPosterPath = poster_path => {
      return poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : undefined;
    };

    const createTitle = ({ title, name }) => {
      return title ? title : name;
    };

    const createYearRelease = release_date => {
      return release_date
        ? release_date.slice(0, 4)
        : 'Nevidomo, ta y ne cikavut';
    };

    const createUserScore = vote_average => {
      return vote_average ? parseFloat(vote_average) * 10 : 'Fignya';
    };

    const createOwerView = overview => {
      return overview ? overview : 'Nema scho kazatu';
    };

    const createGenresToString = genres => {
      return genres.map(el => el.name).join(', ');
    };

    const normalize = data => {
      if (data === 404) {
        return data;
      }
      return {
        ...data,
        posterPatch: createPosterPath(data.poster_path),
        movieName: createTitle(data),
        yearRelease: createYearRelease(data.release_date),
        userScore: createUserScore(data.vote_average),
        owerView: createOwerView(data.overview),
        genresToString: createGenresToString(data.genres),
      };
    };

    fetchMovieDetails(moviesId)
      .then(data => {
        return normalize(data);
      })
      .then(data => {
        return setMovieDetails(data);
      });
  }, [moviesId]);

  return (
    <>
      {!movieDetails && <h1>Loading...</h1>}
      {movieDetails === 404 && <h1>Інформація відсутня. Бекенд лінивий!!!</h1>}
      {movieDetails !== 404 &&
        movieDetails && ( //<h1>dsfgsdgd</h1>
          <>
            <DetailesBox>
              <ImageBox>
                <Image
                  src={movieDetails.posterPatch}
                  alt={movieDetails.title}
                />
              </ImageBox>
              <InfoBox>
                <h2>
                  {movieDetails.movieName} ({movieDetails.yearRelease})
                </h2>
                <p>User Score {movieDetails.userScore}%</p>
                <h4>Owerview</h4>
                <p>{movieDetails.overview}</p>
                <h4>Genres</h4>
                {movieDetails.genresToString}
              </InfoBox>
            </DetailesBox>
            <BoxCastReviews>
              <p>Additional information</p>
              <ul>
                <li>Cast</li>
                <li>Reviews</li>
              </ul>
            </BoxCastReviews>
          </>
        )}
    </>
  );
};
