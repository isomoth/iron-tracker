import styled from 'styled-components';

export const MainContainer = styled.section`
  align-items: center;
  text-align: center;
  margin-top: 40%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  @media only screen and (min-width: 768px) {
    .main-container {
      margin-top: 20%;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 15%;
    width: 50%;
  }
`;
