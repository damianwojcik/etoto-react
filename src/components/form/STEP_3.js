import React from 'react';

const STEP_3 = ({ setCurrentPage, form, setForm }) => {
  // TODO: DRY
  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
    </>
  );
};

export default STEP_3;
