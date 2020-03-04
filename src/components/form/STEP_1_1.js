import React from 'react';
import selfie from '../../assets/images/selfie.jpg';

const STEP_1_1 = ({ setCurrentPage, form, setForm }) => {
  const changePasswordVisibility = e => {
    var parentElement = e.target.parentElement;
    var inputElement = parentElement.querySelector('input');

    if (inputElement.type === 'password') {
      inputElement.type = 'text';
      e.target.classList.toggle('show');
    } else {
      inputElement.type = 'password';
      e.target.classList.toggle('show');
    }
  };

  const expandCheckboxHandler = e => {
    var wrapperElem = e.target.parentElement;
    var spanElem = wrapperElem.querySelector('.checkbox__text');
    var labelElem = wrapperElem.querySelector('label');

    e.preventDefault();

    if (spanElem.classList.contains('expanded')) {
      labelElem.classList.remove('expanded');
      spanElem.classList.remove('expanded');
      e.target.classList.remove('expanded');
      e.target.innerText = 'rozwiń';
    } else {
      labelElem.classList.add('expanded');
      spanElem.classList.add('expanded');
      e.target.classList.add('expanded');
      e.target.innerText = 'zwiń';
    }
  };

  const expandDisclaimerHandler = e => {
    var wrapperElem = e.target.parentElement;
    var paragraphElem = wrapperElem.querySelector('p');

    e.preventDefault();

    if (paragraphElem.classList.contains('expanded')) {
      paragraphElem.classList.remove('expanded');
      e.target.classList.remove('expanded');
      e.target.innerText = 'rozwiń';
    } else {
      paragraphElem.classList.add('expanded');
      e.target.classList.add('expanded');
      e.target.innerText = 'zwiń';
    }
  };

  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = e => {
    setForm({
      ...form,
      [e.target.name]: !form[e.target.name]
    });
  };

  return (
    <>
      <div className="input-wrapper mb-15 d-mb-45">
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Adres e-mail"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper mb-25 d-mb-45 d-ml-115">
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Podaj hasło"
          onChange={handleInputChange}
        />
        <span onClick={changePasswordVisibility} id="js-password"></span>
      </div>
      <div className="inner-wrapper">
        <div className="checkbox-wrapper checkbox-wrapper--expandable mb-20 d-mb-25">
          <input
            id="checkbox-1"
            name="checkbox1"
            className="checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox-1">
            <span className="checkbox__text">
              Oświadczam, że: a) mam ukończone 18 lat, b) mój udział w zakładach
              organizowanych przez Spółkę nie narusza obowiązujących przepisów,
              c) podane przeze mnie dane osobowe są prawidłowe, aktualne i
              zgodne z prawdą, a jeśli dane te ulegną zmianie zobowiązuję się
              dokonać ich aktualizacji, d) środki wpłacane przez mnie na Konto
              Etoto nie pochodzą z nielegalnych źródeł oraz że nie będą
              wykorzystywane w celach sprzecznych z prawem, e) zapoznałem się z
              postanowieniami niniejszego{' '}
              <a
                href="https://www.etoto.pl/information/regulamin/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Regulaminu
              </a>
              , Dodatkowymi warunkami urządzania zakładów oraz{' '}
              <a
                href="https://www.etoto.pl/information/regulamin/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Polityką Prywatności
              </a>{' '}
              i je akceptuję.
            </span>
          </label>
          <button
            type="button"
            id="js-expandCheckbox"
            className="expand-link link"
            onClick={expandCheckboxHandler}
          >
            rozwiń
          </button>
        </div>
        <div className="checkbox-wrapper mb-15 d-mb-25">
          <input
            id="checkbox-2"
            name="checkbox2"
            className="checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox-2">
            <span className="checkbox__text">
              Zgadzam się na otrzymywanie informacji handlowej drogą
              elektroniczną.
            </span>
          </label>
        </div>
        <small className="annotation mb-15 d-mb-35">
          Jeżeli chcesz otrzymać ofertę powitalną oraz inne bonusy, zaznacz
          powyższą zgodę.
        </small>
        <div className="img-wrapper selfie mobile-only">
          <img src={selfie} alt="Zrób zdjęcie dokumentu tożsamości" />
        </div>
        <button
          onClick={e => {
            e.preventDefault();
            setCurrentPage('1_2');
          }}
          className="button button--large mb-25 d-mb-40"
        >
          <span className="mobile-only">
            {' '}
            Zrób zdjęcie dokumentu tożsamości
          </span>
          <span className="desktop-only">Wyślij dokument tożsamości</span>
        </button>
        <div className="link-wrapper mb-25 d-mb-40">
          <button
            onClick={e => {
              e.preventDefault();
              setCurrentPage('1_3');
            }}
          >
            Doślij dokument tożsamości później
          </button>
        </div>
      </div>
      <div className="disclaimer">
        <p className="disclaimer__text">
          Administratorem danych osobowych jest spółka E-TOTO Zakłady
          Bukmacherskie Sp. z.o.o. w Warszawie, ul. Żurawia 8, 00-503 Warszawa.
          Posiada Pani/Pan prawo dostępu do treści danych, sprostowania ich bądź
          usunięcia lub ograniczenia przetwarzania, a także prawo do
          przeniesienia swoich danych i wniesienia skargi do organu nadzorczego.
          Podanie danych osobowych jest dobrowolne, jednak niezbędne w celu
          realiacji usług. Szczegółowe informacje na temat przetwarzania danych
          dostępne są w Polityce Prywatności.
        </p>
        <button
          type="button"
          onClick={expandDisclaimerHandler}
          id="js-expandDisclaimer"
          className="expand-link"
        >
          rozwiń
        </button>
      </div>
    </>
  );
};

export default STEP_1_1;
