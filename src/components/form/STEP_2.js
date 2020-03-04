import React from 'react';

const STEP_2 = ({ setCurrentPage, form, setForm }) => {
  // TODO: DRY
  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // TODO: DRY
  const handleCheckboxChange = e => {
    setForm({
      ...form,
      [e.target.name]: !form[e.target.name]
    });
  };

  return (
    <>
      <div className="input-wrapper mb-20 d-mb-35">
        <span className="errorMessage errorMessage--gray errorMessage--top">
          Kraj urodzenia
        </span>
        <select
          name="country"
          className="js-select2 input select"
          defaultValue="poland"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper mb-20 d-mb-35">
        <input
          id="js-validateZipCode"
          type="tel"
          name="zipCode"
          className="input"
          placeholder="Kod pocztowy"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper mb-20 d-mb-35 d-ml-115">
        <input
          className="input"
          type="text"
          name="city"
          placeholder="Miejscowość"
          onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
        <div className="checkbox-wrapper mb-35 d-mb-50">
          <input
            id="checkbox-3"
            name="checkbox3"
            className="checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox-3">
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
    </>
  );
};

export default STEP_2;
