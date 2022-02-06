import styled from 'styled-components';

export const SuggestionContainer = styled.div`
  cursor: pointer;
  border: 2px solid gray;
  color: #fff;
  width: 80%;
  &:hover {
    background: #1ba2f6;
  }
  margin-left: auto;
  margin-right: auto;
  padding: 0.8rem 0.75rem;
`;

export const InputContainer = styled.div`
  /* position: relative; */
  width: 100%;
`;

export const TrackButton = styled.button`
  margin-left: -17%;
  /* position: absolute; */
  /* z-index: 2; */
  &:disabled {
    background: #073322;
  }
`;

export const TrackButton2 = styled.button`
  display: inline-flex;
  /* position: relative; */
  &:disabled {
    background: #073322;
  }
`;

export const FoodDataContainer = styled.div`
  background: #6f42c1;
  display: inline-flex;
  gap: 1%;
  justify-content: space-evenly;
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
  padding: 0.5rem 0.75rem;
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
  padding: 0.5rem 0.75rem;
`;
