import styled from "styled-components";

/* Community Statement */
export const CommunityHero = styled.section`
  background-color: #555b6e;
  padding: 40px 80px;
  text-align: center;
  color: #bee3db;
  align-items: center;
  justify-content: center;

  & h2{
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

/* Community Photos */
export const CommunityPhotos = styled.section`
  background-color: #555b6e;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0px 0px 50px;
  justify-content: center;
`;
export const GroupImage = styled.img`
  max-width: 100%;
  width: 400px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  margin: 10px;
`;

export const GroupContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  transition: 2s ease;
  align-items: center;

  &:hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    transition: 1s ease;
  }
`;

export const CrushSection = styled.section`
  background-color: #89b0ae;
  display: flex;
  justify-content: center;
  padding: 100px 50px;
  text-align: center;

  & a:hover{
    color: #bee3db;
  }
`;
