import React from 'react';

const STEP_2 = ({ setCurrentPage }) => {
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
          <span className="steps__number steps__number--done">
            <span className="icon-done"></span>
          </span>
          <div className="progressbar">
            <div
              className="progressbar__inner progressbar__inner--done"
              style={{ width: '100%' }}
            ></div>
          </div>
          <span className="steps__number steps__number--active">2</span>
          <div className="progressbar">
            <div className="progressbar__inner" style={{ width: '50%' }}></div>
          </div>
          <span className="steps__number">3</span>
        </div>
        <h2 className="title">Uzupełnij pozostałe dane</h2>
      </div>
      <form className="form">
        <div className="input-wrapper mb-20 d-mb-35">
          <span className="errorMessage errorMessage--gray errorMessage--top">
            Kraj urodzenia
          </span>
          <select
            name="nationality"
            className="js-select2 input select"
            defaultValue="poland"
          >
            <option value="poland">Polska</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </div>
        <div className="input-wrapper mb-20 d-mb-35 d-ml-115">
          <input
            className="input"
            type="text"
            name="address"
            placeholder="Adres"
          />
        </div>
        <div className="input-wrapper mb-20 d-mb-35">
          <input
            id="js-validateZipCode"
            type="tel"
            name="zipcode"
            className="input"
            placeholder="Kod pocztowy"
          />
        </div>
        <div className="input-wrapper mb-20 d-mb-35 d-ml-115">
          <input
            className="input"
            type="text"
            name="city"
            placeholder="Miejscowość"
          />
        </div>
        <div className="inner-wrapper inner-wrapper--large">
          <div className="input-wrapper mb-35 d-mb-50">
            <input
              className="js-phoneNumber input"
              type="tel"
              name="phone"
              placeholder="Numer telefonu"
              defaultValue="+48 "
            />
          </div>
          <div className="checkbox-wrapper mb-35 d-mb-50">
            <input id="checkbox-2" className="checkbox" type="checkbox" />
            <label htmlFor="checkbox-2">
              <span className="checkbox__text">
                Zgadzam się na używanie mojego numeru telefonu dla celów
                marketingu bezpośredniego.
              </span>
            </label>
          </div>
          <div className="buttons-wrapper">
            <button
              onClick={e => {
                e.preventDefault();
                setCurrentPage('1_3');
              }}
              className="button button--small button--gray mb-20 d-mb-80"
            >
              Wróć
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                setCurrentPage('3');
              }}
              className="button mb-20 d-mb-80"
            >
              Kontynuuj
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default STEP_2;
