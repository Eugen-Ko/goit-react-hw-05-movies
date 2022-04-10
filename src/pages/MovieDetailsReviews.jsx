import { useFetchMovieReviews } from 'hooks/Hooks';

import { InfoBox } from './PageStyles.styles';

export const MovieDetailsReviews = () => {
  const reviewsDetails = useFetchMovieReviews();

  return (
    <>
      {!reviewsDetails && <h1>Loading...</h1>}
      {reviewsDetails === 404 && (
        <InfoBox>
          <h3>Без коментарів. Не зацікавило.</h3>
        </InfoBox>
      )}
      {reviewsDetails && reviewsDetails !== 404 && (
        <ul>
          {reviewsDetails.map(review => {
            return (
              <li key={`${review.id}`}>
                <h4>Author: {`${review.author}`}</h4>
                <p>{`${review.content}`}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
