import React, { useEffect } from 'react'
import tabsData from '../../tabsData'

const addInputHandlers = inputsArr => {
  inputsArr.forEach(element => {
    let oldValue = element.value
    element.addEventListener('focusin', e => {
      oldValue = e.target.value
      element.value = ''
    })
    element.addEventListener('focusout', e => {
      if (e.target.value === '') {
        element.value = oldValue
      }
    })
    element.addEventListener('input', e => {
      e.target.value = e.target.value
        .replace(/[^0-9./]/g, '')
        .replace(/(\..*)\./g, '$1')
    })
  })
}

const addSuffixToHoursInputs = hoursInputElems => {
  hoursInputElems.forEach(element => {
    element.addEventListener('change', e => {
      const val = e.target.value
      if (val && val.indexOf(' godzin') === -1) {
        e.target.value = val + ' godzin'
      }
    })
  })
}

const addSuffixToBetsInputs = betInputElems => {
  betInputElems.forEach(element => {
    element.addEventListener('change', e => {
      const val = e.target.value
      if (val && val.indexOf(' zł') === -1) {
        e.target.value = val + ' zł'
      }
    })
  })
}

const handleTabs = (form, setForm) => {
  const tabElements = document.querySelectorAll('.tabs .tab')

  tabElements.forEach(tab => {
    tab.addEventListener('click', () => {
      const clickedTabId = tab.dataset.id

      setActiveTab(clickedTabId, form, setForm)
    })
  })
}

const setActiveTab = (id, form, setForm) => {
  const activeTabData = tabsData.filter(entry => entry.id == id)
  const tabElements = document.querySelectorAll('.tabs .tab')
  const activeTabElement = document.querySelector(`.tab[data-id="${id}"`)

  for (let i = 0; i < tabElements.length; i++) {
    tabElements[i].classList.remove('tab--active')
  }

  activeTabElement.classList.add('tab--active')

  setForm({
    ...form,
    bets_daily: `${activeTabData[0].bets_daily} zł`,
    bets_monthly: `${activeTabData[0].bets_monthly} zł`,
    time_daily: `${activeTabData[0].time_daily} godzin`,
    time_monthly: `${activeTabData[0].time_monthly} godzin`
  })
}

const STEP_3 = ({ setCurrentPage, form, setForm }) => {
  const onSubmit = e => {
    e.preventDefault()
    alert(JSON.stringify(form, null, 2))
  }

  useEffect(() => {
    const hoursInputElems = document.querySelectorAll('.js-hours')
    const betInputElems = document.querySelectorAll('.js-bet')

    handleTabs(form, setForm)
    setActiveTab(2, form, setForm)

    addInputHandlers(hoursInputElems)
    addInputHandlers(betInputElems)

    addSuffixToHoursInputs(hoursInputElems)
    addSuffixToBetsInputs(betInputElems)
  }, [])

  // TODO: DRY
  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={onSubmit}>
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
          defaultValue={form['bets_daily']}
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
          defaultValue={form['bets_monthly']}
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
          defaultValue={form['time_daily']}
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
          defaultValue={form['time_monthly']}
        />
      </div>
      <div className="buttons-wrapper">
        <button
          onClick={e => {
            e.preventDefault()
            setCurrentPage('2')
          }}
          className="button button--small button--gray mb-20 d-mb-80"
        >
          Wróć
        </button>
        <button type="submit" className="button mb-20 d-mb-80">
          Zarejestruj się i rozpocznij grę
        </button>
      </div>
    </form>
  )
}

export default STEP_3
