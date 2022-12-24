import styled from "styled-components";

export const FooterStyle = styled.div`
  padding: 1rem;
  background-color: #555b6e;
  width: 100%;
  height: 240px;
  margin-top: auto;
`;

export const Links = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0 10px;

  & p {
    margin: 0px;
  }

  & h4 {
    margin: 0px;
  }

  & img {
    width: 100%;
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
`;
