import React from 'react'
import useWindowWidth from '../hooks/useWindowWidth'

const Header = ({ currentPage }) => {
  const windowWidth = useWindowWidth()

  return (
    <div className="header">
      <div className="steps">
        <span
          className={`steps__number ${
            currentPage === '1_1' ||
            currentPage === '1_2' ||
            currentPage === '1_3'
              ? 'steps__number--active'
              : 'steps__number--done'
          }`}
        >
          {currentPage === '1_1' ||
          currentPage === '1_2' ||
          currentPage === '1_3' ? (
            1
          ) : (
            <span className="icon-done"></span>
          )}
        </span>
        <div className="progressbar">
          <div
            className={`progressbar__inner ${
              currentPage === '1_1' ||
              currentPage === '1_2' ||
              currentPage === '1_3'
                ? ''
                : 'progressbar__inner--done'
            }`}
            style={
              currentPage === '1_1'
                ? { width: '33%' }
                : currentPage === '1_2' || currentPage === '1_3'
                ? { width: '66%' }
                : { width: '100%' }
            }
          ></div>
        </div>
        <span
          className={`steps__number ${
            currentPage === '2'
              ? 'steps__number--active'
              : currentPage === '3'
              ? 'steps__number--done'
              : ''
          }`}
        >
          {currentPage === '1_1' ||
          currentPage === '1_2' ||
          currentPage === '1_3' ||
          currentPage === '2' ? (
            2
          ) : (
            <span className="icon-done"></span>
          )}
        </span>
        <div className="progressbar">
          <div
            className={`progressbar__inner ${
              currentPage === '3' ? 'progressbar__inner--done' : ''
            }`}
            style={
              currentPage === '2'
                ? { width: '50%' }
                : currentPage === '3'
                ? { width: '100%' }
                : { width: '0' }
            }
          ></div>
        </div>
        <span
          className={`steps__number ${
            currentPage === '3' ? 'steps__number--active' : ''
          }`}
        >
          3
        </span>
      </div>
      <h2 className="title">
        {currentPage === '1_1'
          ? 'Darmowa rejestracja w 30 sekund'
          : currentPage === '1_2' && windowWidth < 1100
          ? 'Zrób zdjęcie dokumentu'
          : currentPage === '1_2' && windowWidth > 1100
          ? 'Prześlij zdjęcie dokumentu tożsamości lub wykonaj je na swoim smartfonie'
          : currentPage === '1_3'
          ? 'Uzupełnij podstawowe dane'
          : currentPage === '2'
          ? 'Uzupełnij pozostałe dane'
          : currentPage === '3'
          ? 'Ustaw wymagane limity na grę'
          : 'Nie prawidłowa strona.'}
      </h2>
    </div>
  )
}

export default Header
