import React from 'react';
import { Footer } from './Footer';
import { MainContainer } from '../components/MainContainer.styled';

export const Disclaimer = () => {
  return (
    <>
      <MainContainer>
        <h1>DISCLAIMER</h1>
        <p>
          This tool is not intended to be a substitute for professional medical
          advice and should not be relied on as health or personal advice.
        </p>
        <p>
          Always seek the guidance of your doctor or other qualified health
          professional with any questions you may have regarding your health or
          a medical condition.
        </p>
      </MainContainer>
      <Footer />
    </>
  );
};
