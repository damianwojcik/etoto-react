import React from 'react'
import useWindowWidth from '../hooks/useWindowWidth'
import logo from '../assets/images/logo.jpg'
import logoTablet from '../assets/images/logo_tablet.jpg'

const Logo = () => {
  const windowWidth = useWindowWidth()

  return (
    <div className="logo">
      {windowWidth < 600 ? (
        <img src={logo} alt="Etoto Promo" />
      ) : (
        <img src={logoTablet} alt="Etoto Promo" />
      )}
    </div>
  )
}

export default Logo
