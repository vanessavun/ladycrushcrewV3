import styled from "styled-components";

export const FooterStyle = styled.div`
  color: white;
  padding: 1rem;
  background-color: #555b6e;
  width: 100%;
  height: 240px;
  margin-top: auto;

  @media screen and (max-width: 600px) {
    height: fit-content;
  }
`;

export const Links = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
    justify-content: initial;
    align-items: initial;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0 10px;

  & a {
    color: white;
  }

  & p {
    margin: 0px;
  }

  & h4 {
    margin: 0px;
  }

  & img {
    width: 70px;
    height: 70px;
  }

  & Link:hover, a:hover {
    color: #bee3db;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  & p {
    margin: 0;
  }

  @media screen and (max-width: 600px) {
      flex-direction: column;
  }
`;
