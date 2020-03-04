import React from 'react';

const STEP_1_2 = ({ setCurrentPage }) => {
  return (
    <div className="page-wrapper">
      <picture className="logo">
        <source
          media="(min-width: 600px)"
          srcSet="assets/images/logo_tablet.jpg"
        />
        <img src="assets/images/logo.jpg" alt="Etoto Promo" />
      </picture>
      <div className="header">
        <div className="steps">
          <span className="steps__number steps__number--active">1</span>
          <div className="progressbar">
            <div className="progressbar__inner" style={{ width: '66%' }}></div>
          </div>
          <span className="steps__number">2</span>
          <div className="progressbar">
            <div className="progressbar__inner" style={{ width: '0' }}></div>
          </div>
          <span className="steps__number">3</span>
        </div>
        <h2 className="title mobile-only">Zrób zdjęcie dokumentu</h2>
        <h2 className="title desktop-only">
          Prześlij zdjęcie dokumentu tożsamości lub wykonaj je na swoim
          smartfonie
        </h2>
      </div>
      <form className="form">
        <div className="img-wrapper mb-35 d-mb-50">
          <a href="1.3.html">
            <picture>
              <source
                media="(min-width: 1100px)"
                srcSet="assets/images/placeholder-desktop.jpg"
              />
              <img
                src="assets/images/placeholder.jpg"
                alt="Zrób zdjęcie dokumentu"
              />
            </picture>
          </a>
        </div>
        <div className="buttons-wrapper">
          <button
            onClick={e => {
              e.preventDefault();
              setCurrentPage('1_1');
            }}
            className="button button--small button--gray mb-20"
          >
            Wróć
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              setCurrentPage('1_3');
            }}
            className="button mb-20"
          >
            Kontynuuj
          </button>
        </div>
      </form>
    </div>
  );
};

export default STEP_1_2;
