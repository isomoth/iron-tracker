import React from 'react';

const date = new Date();
const currentYear = date.getFullYear();

export const Footer = () => {
  return (
    <div>
      <p>
        Made by{' '}
        <a
          className='footer-link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/isomoth'
        >
          Isabel González
        </a>{' '}
        @ Technigo
      </p>
      <p>Copyright {currentYear}</p>
      <p>
        This application does not provide medical advice, diagnosis or
        treatment.
      </p>
      <p>See additional information.</p>
    </div>
  );
};
