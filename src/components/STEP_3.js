import React from 'react';

const STEP_3 = ({ setCurrentPage }) => {
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
          <span className="steps__number steps__number--done">
            <span className="icon-done"></span>
          </span>
          <div className="progressbar">
            <div
              className="progressbar__inner progressbar__inner--done"
              style={{ width: '100%' }}
            ></div>
          </div>
          <span className="steps__number steps__number--active">3</span>
        </div>
        <h2 className="title">Ustaw wymagane limity na grę</h2>
      </div>
      <div className="tabs">
        <div className="tab" data-id="1">
          Początkujący
        </div>
        <div className="tab" data-id="2">
          Zaawansowany
        </div>
        <div className="tab" data-id="3">
          Ekspert
        </div>
      </div>
      <form className="form form--step3">
        <div className="input-wrapper mb-30 d-mb-50">
          <label htmlFor="bets_daily" className="label">
            Dzienny limit na zakłady
          </label>
          <input
            id="bets_daily"
            name="bets_daily"
            className="input js-onlyNumbers js-bet"
            type="tel"
            placeholder=" "
          />
        </div>
        <div className="input-wrapper mb-30 d-mb-50 d-ml-115">
          <label htmlFor="bets_monthly" className="label">
            Miesięczny limit na zakłady
          </label>
          <input
            id="bets_monthly"
            name="bets_monthly"
            className="input js-onlyNumbers js-bet"
            type="tel"
            placeholder=" "
          />
        </div>
        <div className="input-wrapper mb-30 d-mb-50">
          <label htmlFor="time_daily" className="label">
            Dzienny limit czasu na zakłady
          </label>
          <input
            id="time_daily"
            name="time_daily"
            className="input js-onlyNumbers js-hours"
            type="tel"
            placeholder=" "
          />
        </div>
        <div className="input-wrapper mb-40 d-mb-100 d-ml-115">
          <label htmlFor="time_monthly" className="label">
            Miesięczny limit czasu na zakłady
          </label>
          <input
            id="time_monthly"
            name="time_monthly"
            className="input js-onlyNumbers js-hours"
            type="tel"
            placeholder=" "
          />
        </div>
        <div className="buttons-wrapper">
          <button
            onClick={e => {
              e.preventDefault();
              setCurrentPage('2');
            }}
            className="button button--small button--gray mb-20 d-mb-80"
          >
            Wróć
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              setCurrentPage('1_1');
            }}
            className="button mb-20 d-mb-80"
          >
            Zarejestruj się i rozpocznij grę
          </button>
        </div>
      </form>
    </div>
  );
};

export default STEP_3;
