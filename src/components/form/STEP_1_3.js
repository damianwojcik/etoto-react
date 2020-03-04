import React from 'react';

const STEP_1_3 = ({ setCurrentPage, form, setForm }) => {
  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const datepickerChangeHandler = e => {
    var datePickerInputElem = document.querySelector('#js-datepicker');
    var date = new Date(e.target.value);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedDay = day < 10 ? '0' + day : day;
    var formattedMonth = month < 10 ? '0' + month : month;
    var formattedDate = formattedDay + '/' + formattedMonth + '/' + year;

    datePickerInputElem.value = formattedDate;
  };

  const onlyNumbersInputHandler = e => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
  };

  return (
    <>
      <div className="input-wrapper mb-20 d-mb-35">
        <input
          className="input input--invalid"
          name="firstName"
          type="text"
          placeholder="Imię"
          onChange={handleInputChange}
        />
        <span className="errorMessage">Niepoprawne imię.</span>
      </div>
      <div className="input-wrapper mb-20 d-mb-35 d-ml-115">
        <input
          className="input"
          type="text"
          name="lastName"
          placeholder="Nazwisko"
          onChange={handleInputChange}
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
          name="pesel"
          className="input"
          type="tel"
          placeholder="PESEL"
          onChange={handleInputChange}
          onInput={onlyNumbersInputHandler}
        />
      </div>
      <div className="input-wrapper mb-20 d-mb-130">
        <input
          name="identityNumber"
          className="input"
          type="text"
          placeholder="Seria / numer dokumentu tożsamości"
          onChange={handleInputChange}
        />
        <span className="errorMessage errorMessage--gray">Nieobowiązkowe</span>
      </div>
      <div className="input-wrapper mb-40 d-mb-130 d-ml-115">
        <input
          name="identityExpiryDate"
          id="js-datepicker"
          className="input"
          type="text"
          placeholder="Data ważności dokumentu tożsamości"
          onChange={handleInputChange}
        />
        <div className="datepicker-wrapper">
          <input
            className="datepicker"
            type="date"
            onChange={datepickerChangeHandler}
          />
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
