import React from 'react';

const STEP_1_3 = ({ setCurrentPage }) => {
  return (
    <>
      <div className="input-wrapper mb-20 d-mb-35">
        <input
          className="input input--invalid"
          name="firstname"
          type="text"
          placeholder="Imię"
        />
        <span className="errorMessage">Niepoprawne imię.</span>
      </div>
      <div className="input-wrapper mb-20 d-mb-35 d-ml-115">
        <input
          className="input"
          type="text"
          name="lastname"
          placeholder="Nazwisko"
        />
      </div>
      <div className="input-wrapper mb-20 d-mb-35">
        <span className="errorMessage errorMessage--gray errorMessage--top">
          Obywatelstwo
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
          className="js-onlyNumbers input"
          type="tel"
          placeholder="PESEL"
        />
      </div>
      <div className="input-wrapper mb-20 d-mb-130">
        <input
          className="input"
          type="text"
          placeholder="Seria / numer dokumentu tożsamości"
        />
        <span className="errorMessage errorMessage--gray">Nieobowiązkowe</span>
      </div>
      <div className="input-wrapper mb-40 d-mb-130 d-ml-115">
        <input
          id="js-datepicker"
          className="input"
          type="text"
          placeholder="Data ważności dokumentu tożsamości"
        />
        <div className="datepicker-wrapper">
          <input className="datepicker" type="date" />
        </div>
        <span className="errorMessage errorMessage--gray">Nieobowiązkowe</span>
      </div>
      <div className="inner-wrapper">
        <div className="buttons-wrapper">
          <button
            onClick={e => {
              e.preventDefault();
              setCurrentPage('1_2');
            }}
            className="button button--small button--gray mb-20 d-mb-80"
          >
            Wróć
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              setCurrentPage('2');
            }}
            className="button mb-20 d-mb-80"
          >
            Kontynuuj
          </button>
        </div>
      </div>
    </>
  );
};

export default STEP_1_3;
