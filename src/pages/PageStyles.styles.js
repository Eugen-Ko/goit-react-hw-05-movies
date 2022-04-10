import styled from 'styled-components';

export const Title = styled.h2`
  padding-left: 15px;
  color: #000000;
  font-size: 25px;
  font-weight: 700;
  text-align: left;
`;

export const TitleMoviesNameH3 = styled.h3`
  font-size: 25px;
`;

export const PlainText = styled.p;

export const DetailesBox = styled.div`
  display: flex;
  padding: 15px;
  margin: 0;
  justify-content: left;
`;

export const ImageBox = styled.div`
  max-width: 250px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoBox = styled.div`
  margin: 0;
  padding: 0 15px;
  width: 100%;
`;

export const BoxCastReviews = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
`;

export const ActorBox = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const ImageActor = styled.img`
  margin: 0;
  padding: 15px 15px 15px 0;
  height: 180px;
  display: block;
`;

export const ActorInfo = styled.div`
  margin: 0;
  padding: 15px 15px 15px 0;
  height: 150px;
  display: block;
`;

export const BoxSearch = styled.div`
  display: flex;
  padding-left: 15px;
`;

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
`;

export const InputSearch = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 17px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ButtonSearch = styled.button`
  display: inline-block;
  width: 70px;
  height: 30px;
  border: 0;
  color: #c1c1c1;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-left: 1px solid #000000;
  &:hover {
    color: #2196f3;
  }
`;
