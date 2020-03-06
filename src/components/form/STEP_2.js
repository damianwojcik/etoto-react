import React from 'react'
import { useForm } from 'react-hook-form'

const handleZipCode = e => {
  e.target.value = e.target.value
    .replace(/[^0-9-/]/g, '')
    .replace(/(\..*)\./g, '$1')

  if (e.target.value.length === 2) {
    const newText =
      e.target.value.substring(0, 2) + '-' + e.target.value.substring(5)
    e.target.value = newText
  }
}

const phoneNumberInputHandler = e => {
  e.target.value = e.target.value
    .replace(/[^0-9+ ]/g, '')
    .replace(/(\..*)\./g, '$1')
}

const STEP_2 = ({ setCurrentPage, form, setForm }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    setCurrentPage('3')
  }
  // TODO: DRY
  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // TODO: DRY
  const handleCheckboxChange = e => {
    setForm({
      ...form,
      [e.target.name]: !form[e.target.name]
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper mb-20 d-mb-35">
        <span className="errorMessage errorMessage--gray">Kraj urodzenia</span>
        <select
          name="country"
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
          className={`input ${errors.address && 'input--invalid'}`}
          type="text"
          name="address"
          placeholder="Adres"
          onChange={handleInputChange}
          ref={register({ required: true })}
          defaultValue={form['address']}
        />
        {errors.address && errors.address.type === 'required' && (
          <span className="errorMessage">Adres jest wymagany.</span>
        )}
      </div>
      <div className="input-wrapper mb-20 d-mb-35">
        <input
          type="tel"
          name="zipCode"
          className={`input ${errors.zipCode && 'input--invalid'}`}
          placeholder="Kod pocztowy"
          onChange={handleInputChange}
          onInput={handleZipCode}
          maxLength="6"
          ref={register({ required: true })}
          defaultValue={form['zipCode']}
        />
        {errors.zipCode && errors.zipCode.type === 'required' && (
          <span className="errorMessage">Kod pocztowy jest wymagany.</span>
        )}
      </div>
      <div className="input-wrapper mb-20 d-mb-35 d-ml-115">
        <input
          className={`input ${errors.city && 'input--invalid'}`}
          type="text"
          name="city"
          placeholder="Miejscowość"
          onChange={handleInputChange}
          ref={register({ required: true })}
          defaultValue={form['city']}
        />
        {errors.city && errors.city.type === 'required' && (
          <span className="errorMessage">Miejscowość jest wymagana.</span>
        )}
      </div>
      <div className="inner-wrapper inner-wrapper--large">
        <div className="input-wrapper mb-35 d-mb-50">
          <input
            className={`input ${errors.phone && 'input--invalid'}`}
            type="tel"
            name="phone"
            placeholder="Numer telefonu"
            onChange={handleInputChange}
            onInput={phoneNumberInputHandler}
            ref={register({ required: true, minLength: 9 })}
            defaultValue={form['phone']}
          />
          {errors.phone && (
            <span className="errorMessage">Numer telefonu jest wymagany.</span>
          )}
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
              e.preventDefault()
              setCurrentPage('1_3')
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

export default STEP_2
