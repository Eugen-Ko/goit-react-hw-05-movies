import { useFetchMovieDetails, useParentPage } from 'hooks/Hooks';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  DetailesBox,
  ImageBox,
  InfoBox,
  Image,
  BoxCastReviews,
  ButtonGoBack,
} from './PageStyles.styles';

export const MovieDetailsPage = () => {
  const movieDetails = useFetchMovieDetails();
  // const parentPage = useParentPage();
  // const hookParentPage = useParentPage();
  const location = useLocation();
  console.log(location);
  // const parentPage = hookParentPage ? hookParentPage : '/';

  const cameFrom = location?.state?.from ?? '/';
  //  <Links to={`/movies/${moviesId}/cast`} state={{ from: cameFrom }}>

  let navigate = useNavigate();

  return (
    <>
      {/* {!parentPage && ( */}
      <ButtonGoBack
        type="button"
        onClick={() => navigate(location?.state?.from)}
      >{`<- Go Back`}</ButtonGoBack>
      {/* )} */}
      {!movieDetails && <h1>Loading...</h1>}
      {movieDetails === 404 && <h1>Інформація відсутня. Бекенд лінивий!!!</h1>}
      {movieDetails !== 404 && movieDetails && (
        <>
          <DetailesBox>
            <ImageBox>
              <Image src={movieDetails.posterPatch} alt={movieDetails.title} />
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
              <li>
                <NavLink
                  to={`/movies/${movieDetails.id}/cast`}
                  state={{ from: cameFrom }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/movies/${movieDetails.id}/review`}
                  state={{ from: cameFrom }}
                >
                  Review
                </NavLink>
              </li>
            </ul>
          </BoxCastReviews>
        </>
      )}
      <Outlet />
    </>
  );
};
