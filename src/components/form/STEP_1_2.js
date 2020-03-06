import React from 'react'
import useWindowWidth from '../../hooks/useWindowWidth'
import placeholder from '../../assets/images/placeholder.jpg'
import placeholderDesktop from '../../assets/images/placeholder-desktop.jpg'

const STEP_1_2 = ({ setCurrentPage }) => {
  const windowWidth = useWindowWidth()

  return (
    <>
      <div className="img-wrapper mb-35 d-mb-50">
        {windowWidth < 1100 ? (
          <img src={placeholder} alt="Zrób zdjęcie dokumentu" />
        ) : (
          <img src={placeholderDesktop} alt="Zrób zdjęcie dokumentu" />
        )}
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
    </>
  )
}

export default STEP_1_2
