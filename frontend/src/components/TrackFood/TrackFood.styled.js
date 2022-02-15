import styled from 'styled-components';

export const SuggestionsContainer = styled.ul`
  padding: 0;
  margin-left: 0;
  margin-right: auto;
`;

export const SuggestionContainer = styled.li`
  cursor: pointer;
  background: #1b1035;
  border: 2px solid gray;
  color: #fff;
  &:hover {
    background: #1ba2f6;
  }
  list-style-type: none;
  padding: 0.8rem 0.75rem;
  z-index: 1;
`;

export const InputContainer = styled.div`
  width: 100%;
  text-size-adjust: auto;
`;

export const TrackButton = styled.button`
  background: #e73cb8;
  border: 0 solid transparent;
  border-color: #e73cb8;
  color: #fff;
  &:disabled {
    background: #6b40ad;
  }
  &:hover {
    background: #6b40ad;
    cursor: pointer;
  }
  margin-top: 5%;
`;

export const ResetButton = styled.button`
  background: #1ba2f6;
  border: 0 solid transparent;
  border-color: #1ba2f6;
  color: #fff;
  &:disabled {
    background: #126ea7;
  }
  &:hover {
    background: #6b40ad;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  background: #00c9a5;
  margin-left: -5%;
  position: absolute;
  text-align: center;
  width: 8%;
  &:hover {
    background: #2e7a5d;
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 5%;
    width: 2%;
  }
`;

export const FoodDataContainer = styled.div`
  background: #6f42c1;
  border-radius: 0.15rem;
  display: inline-flex;
  gap: 1%;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: space-evenly;
  margin-top: 5%;
  width: 100%;
`;

export const DisplayedFood = styled.p`
  border-style: solid;
  border-width: 0;
  display: inline-flex;
  flex-direction: column;
  gap: 1%;
  justify-content: space-evenly;
  text-justify: center;
  border-color: #dee2e6;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding: 1rem 0.75rem;
  width: 20%;
  word-wrap: break-word;
  overflow-x: auto;
`;

export const DisplayedNutrition = styled.p`
  border-style: solid;
  border-width: 0;
  border-color: #dee2e6;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-justify: center;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
`;
