import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  font-size: small;
  padding: 1em;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: #e73cb8;
`;

const date = new Date();
const currentYear = date.getFullYear();

export const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Made by{' '}
        <FooterLink
          className='footer-link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/isomoth'
        >
          Isabel González
        </FooterLink>
      </p>
      <p>Copyright {currentYear}</p>
    </FooterContainer>
  );
};
