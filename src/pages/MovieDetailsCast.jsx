import { useFetchMovieCast } from 'hooks/Hooks';
import { ActorBox, ImageActor, ActorInfo } from './PageStyles.styles';

import undefined from 'pages/image/undefined.jpg';

const imgPath = 'https://image.tmdb.org/t/p/w500';

export const MovieDetailsCast = () => {
  const castList = useFetchMovieCast();
  return (
    <>
      {castList === null && <h1>Loading...</h1>}
      {castList === 0 && <h3>Nothing fined....</h3>}
      {castList !== 0 && castList && (
        <ul>
          {castList.map(({ id, original_name, profile_path, character }) => (
            <ActorBox key={id}>
              <ImageActor
                src={`${!profile_path ? undefined : imgPath + profile_path}`}
                alt={`${original_name}`}
              />
              <ActorInfo>
                <p>Name - {`${original_name}`}</p>
                <p>Character - {`${character}`}</p>
              </ActorInfo>
            </ActorBox>
          ))}
        </ul>
      )}
    </>
  );
};
