import styled from "styled-components";
import backgroundPhoto from '../../../assets/LCC_IndianRock.jpg';

export const HeaderPhoto = styled.section`
  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-color: white;
  min-height: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const HeaderDescription = styled.div`
  background-color: #bee3db;
  opacity: 0.7;
  text-align: center;
  padding: 10px;
`;
