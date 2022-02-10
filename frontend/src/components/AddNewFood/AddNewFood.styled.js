import styled from 'styled-components';

export const AddFoodButton = styled.button`
  background: #46d5da;
  border: 0 solid transparent;
  border-color: #6b40ad;
  color: #fff;
  margin: 5%;
  &:hover {
    background: #6b40ad;
  }
`;

export const AddFoodForm = styled.form`
  background: transparent;
  border: 0 solid transparent;
  border-color: #46d5da;
  box-shadow: 0 0 2px rgba(60, 169, 242, 0.9), 0 0 4px rgba(60, 102, 242, 0.4),
    0 0 1rem rgba(60, 242, 242, 0.3), 0 0 4rem rgba(60, 154, 242, 0.1);
  color: #46d5da;
  padding-top: 5%;
  margin-top: 5%;
`;

export const SaveButton = styled.button`
  background: #e73cb8;
  margin: 5%;
  &:hover: {
    background: #6b40ad;
    cursor: pointer;
  }
`;
