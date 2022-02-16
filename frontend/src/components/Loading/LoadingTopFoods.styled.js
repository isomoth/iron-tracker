import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
 0% {
    transform: rotate(0);
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  background: #1b1035;
  display: flex;
  gap: 15%;
  justify-content: center;
  align-items: center;
  margin-top: 85%;
  margin-left: 20%;
  margin-right: auto;
  z-index: -2;
  @media only screen and (min-width: 768px) {
    margin-top: 30%;
    margin-left: 30%;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 20%;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 20%;
  }
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid #e73cb8;
  border-left: 5px solid #46d5da;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  animation: ${SpinnerAnimation} infinite 0.5s;
  -webkit-animation: ${SpinnerAnimation} infinite 0.5s;
`;
