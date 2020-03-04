import React from 'react';
import logo from '../assets/images/logo.jpg';
import logoTablet from '../assets/images/logo_tablet.jpg';

const Logo = () => {
  return (
    <picture className="logo">
      <source media="(min-width: 600px)" srcSet={logoTablet} />
      <img src={logo} alt="Etoto Promo" />
    </picture>
  );
};

export default Logo;
