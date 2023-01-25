import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    width: 400px;
    height: 90%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 5px;
  }

  button {
    width: 85%;
    opacity: 0.7;
    position: absolute;
    top: 250px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 600px) {
    button {
      display: flex;
      opacity: 1;
      top: 60%;
      font-size: smaller;
      padding: 0;
    }
    height: 300px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;