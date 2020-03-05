import React from 'react'

import placeholder from '../../assets/images/placeholder.jpg'
import placeholderDesktop from '../../assets/images/placeholder-desktop.jpg'

const STEP_1_2 = ({ setCurrentPage }) => {
  return (
    <div className="form">
      <div className="img-wrapper mb-35 d-mb-50">
        <picture>
          <source media="(min-width: 1100px)" srcSet={placeholderDesktop} />
          <img src={placeholder} alt="Zrób zdjęcie dokumentu" />
        </picture>
      </div>
      <div className="buttons-wrapper">
        <button
          onClick={e => {
            e.preventDefault()
            setCurrentPage('1_1')
          }}
          className="button button--small button--gray mb-20"
        >
          Wróć
        </button>
        <button
          onClick={e => {
            e.preventDefault()
            setCurrentPage('1_3')
          }}
          className="button mb-20"
        >
          Kontynuuj
        </button>
      </div>
    </div>
  )
}

export default STEP_1_2
