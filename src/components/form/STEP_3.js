import React, { useEffect } from 'react'
import tabsData from '../../tabsData'

// TODO: DRY
const addSuffixToHoursInputs = hoursInputElems => {
  hoursInputElems.forEach(function(element) {
    let oldValue = element.value
    element.addEventListener('focusin', function(e) {
      oldValue = e.target.value
      element.value = ''
    })
    element.addEventListener('focusout', function(e) {
      if (e.target.value === '') {
        element.value = oldValue
      }
    })
    element.addEventListener('input', function(e) {
      e.target.value = e.target.value
        .replace(/[^0-9./]/g, '')
        .replace(/(\..*)\./g, '$1')
    })
    element.addEventListener('change', function(e) {
      const val = e.target.value
      if (val && val.indexOf(' godzin') === -1) {
        e.target.value = val + ' godzin'
      }
    })
  })
}

const addSuffixToBetsInputs = betInputElems => {
  betInputElems.forEach(function(element) {
    let oldValue = element.value
    element.addEventListener('focusin', function(e) {
      oldValue = e.target.value
      element.value = ''
    })
    element.addEventListener('focusout', function(e) {
      if (e.target.value === '') {
        element.value = oldValue
      }
    })
    element.addEventListener('input', function(e) {
      e.target.value = e.target.value
        .replace(/[^0-9./]/g, '')
        .replace(/(\..*)\./g, '$1')
    })
    element.addEventListener('change', function(e) {
      const val = e.target.value
      if (val && val.indexOf(' zł') === -1) {
        e.target.value = val + ' zł'
      }
    })
  })
}

const handleTabs = () => {
  var tabElements = Array.prototype.slice.call(
    document.querySelectorAll('.tabs .tab')
  )
  var initialActiveTabId = 2

  setActiveTab(initialActiveTabId)

  tabElements.forEach(function(tab) {
    tab.addEventListener('click', function(event) {
      var clickedTabId = tab.dataset.id

      setActiveTab(clickedTabId)
    })
  })
}

const setActiveTab = id => {
  var betsDailyElement = document.querySelector('#bets_daily')
  var betsMonthlyElement = document.querySelector('#bets_monthly')
  var timeDailyElement = document.querySelector('#time_daily')
  var timeMonthlyElement = document.querySelector('#time_monthly')
  var activeTabData = tabsData.filter(function(entry) {
    return entry.id == id
  })
  var tabElements = Array.prototype.slice.call(
    document.querySelectorAll('.tabs .tab')
  )
  var activeTabElement = document.querySelector('.tab[data-id="' + id + '"]')

  for (var i = 0; i < tabElements.length; i++) {
    tabElements[i].classList.remove('tab--active')
  }

  activeTabElement.classList.add('tab--active')

  betsDailyElement.value = activeTabData[0].bets_daily + ' zł'
  betsMonthlyElement.value = activeTabData[0].bets_monthly + ' zł'
  timeDailyElement.value = activeTabData[0].time_daily + ' godzin'
  timeMonthlyElement.value = activeTabData[0].time_monthly + ' godzin'
}

const STEP_3 = ({ setCurrentPage, form, setForm }) => {
  const onSubmit = e => {
    e.preventDefault()
    alert(JSON.stringify(form, null, 2))
  }

  useEffect(() => {
    const hoursInputElems = document.querySelectorAll('.js-hours')
    const betInputElems = document.querySelectorAll('.js-bet')

    handleTabs()
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
    <form className="form" onSubmit={onSubmit}>
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
