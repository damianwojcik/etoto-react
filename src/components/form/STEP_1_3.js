import React from 'react'
import { useForm } from 'react-hook-form'

// TODO: DRY
const onlyNumbersInputHandler = e => {
  e.target.value = e.target.value
    .replace(/[^0-9.]/g, '')
    .replace(/(\..*)\./g, '$1')
}

const dateInputHandler = e => {
  e.target.value = e.target.value
    .replace(/[^0-9/]/g, '')
    .replace(/(\..*)\./g, '$1')

  if (e.target.value.length === 2 || e.target.value.length === 5) {
    e.target.value += '/'
  }
}

const STEP_1_3 = ({ setCurrentPage, form, setForm }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    setCurrentPage('2')
  }
  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const datepickerChangeHandler = e => {
    const datePickerInputElem = document.querySelector('#js-datepicker')
    const date = new Date(e.target.value)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const formattedDay = day < 10 ? '0' + day : day
    const formattedMonth = month < 10 ? '0' + month : month
    const formattedDate = formattedDay + '/' + formattedMonth + '/' + year

    datePickerInputElem.value = formattedDate

    setForm({
      ...form,
      identityExpiryDate: formattedDate
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper mb-20 d-mb-35">
        <input
          className={`input ${errors.firstName && 'input--invalid'}`}
          name="firstName"
          type="text"
          placeholder="Imię"
          onChange={handleInputChange}
          ref={register({ required: true })}
          defaultValue={form['firstName']}
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <span className="errorMessage">Imię jest wymagane.</span>
        )}
      </div>
      <div className="input-wrapper mb-20 d-mb-35 d-ml-115">
        <input
          className={`input ${errors.lastName && 'input--invalid'}`}
          type="text"
          name="lastName"
          placeholder="Nazwisko"
          onChange={handleInputChange}
          ref={register({ required: true })}
          defaultValue={form['lastName']}
        />
        {errors.lastName && errors.lastName.type === 'required' && (
          <span className="errorMessage">Naziwsko jest wymagane.</span>
        )}
      </div>
      <div className="input-wrapper mb-20 d-mb-35">
        <span className="errorMessage errorMessage--gray">Obywatelstwo</span>
        <select
          name="nationality"
          className="input select"
          onChange={handleInputChange}
          defaultValue={form['nationality']}
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
          className={`input ${errors.pesel && 'input--invalid'}`}
          type="tel"
          placeholder="PESEL"
          onChange={handleInputChange}
          onInput={onlyNumbersInputHandler}
          ref={register({ required: true })}
          defaultValue={form['pesel']}
        />
        {errors.pesel && errors.pesel.type === 'required' && (
          <span className="errorMessage">PESEL jest wymagany.</span>
        )}
      </div>
      <div className="input-wrapper mb-20 d-mb-130">
        <input
          name="identityNumber"
          className={`input ${errors.identityNumber && 'input--invalid'}`}
          type="text"
          placeholder="Seria / numer dokumentu tożsamości"
          onChange={handleInputChange}
          ref={register({ required: true })}
          defaultValue={form['identityNumber']}
        />
        {errors.identityNumber && errors.identityNumber.type === 'required' && (
          <span className="errorMessage">Pole jest wymagane.</span>
        )}
      </div>
      <div className="input-wrapper mb-40 d-mb-130 d-ml-115">
        <input
          name="identityExpiryDate"
          id="js-datepicker"
          className="input"
          type="text"
          placeholder="Data ważności dokumentu tożsamości"
          onChange={handleInputChange}
          onInput={dateInputHandler}
          defaultValue={form['identityExpiryDate']}
        />
        <div className="datepicker-wrapper">
          <input
            className="datepicker"
            type="date"
            onChange={datepickerChangeHandler}
            defaultValue={form['identityExpiryDate']}
          />
        </div>
        <span className="errorMessage errorMessage--gray">Nieobowiązkowe</span>
      </div>
      <div className="inner-wrapper">
        <div className="buttons-wrapper">
          <button
            onClick={e => {
              e.preventDefault()
              setCurrentPage('1_1')
            }}
            className="button button--small button--gray mb-20 d-mb-80"
          >
            Wróć
          </button>
          <button type="submit" className="button mb-20 d-mb-80">
            Kontynuuj
          </button>
        </div>
      </div>
    </form>
  )
}

export default STEP_1_3
