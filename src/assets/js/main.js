var tabsData = [
  {
    id: 1,
    templatename: 'Początkujący',
    bets_daily: 5000,
    bets_monthly: 150000,
    time_daily: 12,
    time_monthly: 360
  },
  {
    id: 2,
    templatename: 'Zaawansowany',
    bets_daily: 10000,
    bets_monthly: 300000,
    time_daily: 16,
    time_monthly: 500
  },
  {
    id: 3,
    templatename: 'Ekspert',
    bets_daily: 100000,
    bets_monthly: 1000000,
    time_daily: 20,
    time_monthly: 720
  }
];

$(document).ready(function() {
  var $window = $(window);
  var windowWidth = $window.width();
  var datepickerElem = document.querySelector('.datepicker');
  var datepickerInputElem = document.querySelector('#js-datepicker');
  var passwordElem = document.querySelector('#js-password');
  var expandDisclaimerElem = document.querySelector('#js-expandDisclaimer');
  var expandCheckboxElem = document.querySelector('#js-expandCheckbox');
  var zipCodeElem = document.querySelector('#js-validateZipCode');
  var tabsWrapper = document.querySelector('.tabs');
  var phoneNumberElem = document.querySelector('.js-phoneNumber');
  var hoursInputElems = Array.prototype.slice.call(
    document.querySelectorAll('.js-hours')
  );
  var betInputElems = Array.prototype.slice.call(
    document.querySelectorAll('.js-bet')
  );
  var onlyNumbersElems = Array.prototype.slice.call(
    document.querySelectorAll('.js-onlyNumbers')
  );

  $window.on('resize', function() {
    windowWidth = $window.width();

    if (windowWidth > 1100) {
      initSelect2();
      if (datepickerInputElem) {
        initInputMaskOnDesktopDatepicker();
      }
    } else {
      $('.js-select2').each(function(i, obj) {
        if ($(obj).hasClass('select2-hidden-accessible')) {
          $(obj).select2('destroy');
        }
      });
    }
  });

  if (windowWidth > 1100) {
    initSelect2();
    if (datepickerInputElem) {
      initInputMaskOnDesktopDatepicker();
    }
  }

  if (tabsWrapper) {
    handleTabs();
  }

  if (hoursInputElems.length > 0) {
    addSuffixToHoursInputs();
  }

  if (betInputElems.length > 0) {
    addSuffixToBetsInputs();
  }

  if (datepickerElem) {
    datepickerChangeHandler();
  }

  if (expandDisclaimerElem) {
    expandDisclaimerHandler();
  }

  if (passwordElem) {
    passwordInputHandler();
  }

  if (expandCheckboxElem) {
    expandCheckboxHandler();
  }

  if (onlyNumbersElems.length > 0) {
    onlyNumbersInputsHandler();
  }

  if (zipCodeElem) {
    initMaskZipCodeInput();
  }

  if (phoneNumberElem) {
    var im = new Inputmask('+(99[9])-999 999 999', {
      inputmode: 'tel'
    });
    im.mask(phoneNumberElem);
  }

  function initInputMaskOnDesktopDatepicker() {
    $('#js-datepicker').inputmask('99/99/9999', { placeholder: 'DD-MM-YYYY' });
  }

  function handleTabs() {
    var tabElements = Array.prototype.slice.call(
      document.querySelectorAll('.tabs .tab')
    );
    var initialActiveTabId = 2;

    setActiveTab(initialActiveTabId);

    tabElements.forEach(function(tab) {
      tab.addEventListener('click', function(event) {
        var clickedTabId = tab.dataset.id;

        setActiveTab(clickedTabId);
      });
    });
  }

  function setActiveTab(id) {
    var betsDailyElement = document.querySelector('#bets_daily');
    var betsMonthlyElement = document.querySelector('#bets_monthly');
    var timeDailyElement = document.querySelector('#time_daily');
    var timeMonthlyElement = document.querySelector('#time_monthly');
    var activeTabData = tabsData.filter(function(entry) {
      return entry.id == id;
    });
    var tabElements = Array.prototype.slice.call(
      document.querySelectorAll('.tabs .tab')
    );
    var activeTabElement = document.querySelector('.tab[data-id="' + id + '"]');

    for (var i = 0; i < tabElements.length; i++) {
      tabElements[i].classList.remove('tab--active');
    }

    activeTabElement.classList.add('tab--active');

    betsDailyElement.value = activeTabData[0].bets_daily + ' zł';
    betsMonthlyElement.value = activeTabData[0].bets_monthly + ' zł';
    timeDailyElement.value = activeTabData[0].time_daily + ' godzin';
    timeMonthlyElement.value = activeTabData[0].time_monthly + ' godzin';
  }

  function initSelect2() {
    $('.js-select2').select2({
      minimumResultsForSearch: -1
    });
  }

  function datepickerChangeHandler() {
    datepickerElem.addEventListener('change', function(event) {
      var date = new Date(event.target.value);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var formattedDay = day < 10 ? '0' + day : day;
      var formattedMonth = month < 10 ? '0' + month : month;
      var formattedDate = formattedDay + '/' + formattedMonth + '/' + year;

      datepickerInputElem.value = formattedDate;
    });
  }

  function addSuffixToHoursInputs() {
    hoursInputElems.forEach(function(element) {
      var oldValue = element.value;
      element.addEventListener('focusin', function(e) {
        oldValue = e.target.value;
        element.value = '';
      });
      element.addEventListener('focusout', function(e) {
        if (e.target.value === '') {
          element.value = oldValue;
        }
      });
      element.addEventListener('change', function(event) {
        var val = $(this).val();
        if (val.indexOf(' godzin') === -1) {
          $(this).val(val + ' godzin');
        }
      });
    });
  }

  function addSuffixToBetsInputs() {
    betInputElems.forEach(function(element) {
      var oldValue = element.value;
      element.addEventListener('focusin', function(e) {
        oldValue = e.target.value;
        element.value = '';
      });
      element.addEventListener('focusout', function(e) {
        if (e.target.value === '') {
          element.value = oldValue;
        }
      });
      element.addEventListener('change', function() {
        var val = $(this).val();
        if (val.indexOf(' zł') === -1) {
          $(this).val(val + ' zł');
        }
      });
    });
  }

  function passwordInputHandler() {
    passwordElem.addEventListener('mousedown', function(event) {
      var parentElement = event.target.parentElement;
      var inputElement = parentElement.querySelector('input');

      if (inputElement.type === 'password') {
        inputElement.type = 'text';
        passwordElem.classList.toggle('show');
      } else {
        inputElement.type = 'password';
        passwordElem.classList.toggle('show');
      }
    });
  }

  function onlyNumbersInputsHandler() {
    onlyNumbersElems.forEach(function(element) {
      element.addEventListener('paste', function(event) {
        event.preventDefault();
      });
      element.addEventListener('input', function(event) {
        this.value = this.value
          .replace(/[^0-9.]/g, '')
          .replace(/(\..*)\./g, '$1');
      });
    });
  }

  function expandCheckboxHandler() {
    var wrapperElem = expandCheckboxElem.parentElement;
    var spanElem = wrapperElem.querySelector('.checkbox__text');
    var labelElem = wrapperElem.querySelector('label');

    expandCheckboxElem.addEventListener('mousedown', function(event) {
      event.preventDefault();
      if (spanElem.classList.contains('expanded')) {
        labelElem.classList.remove('expanded');
        spanElem.classList.remove('expanded');
        event.target.classList.remove('expanded');
        event.target.innerText = 'rozwiń';
      } else {
        labelElem.classList.add('expanded');
        spanElem.classList.add('expanded');
        event.target.classList.add('expanded');
        event.target.innerText = 'zwiń';
      }
    });
  }

  function initMaskZipCodeInput() {
    var im = new Inputmask('99-999', {
      inputmode: 'tel'
    });
    im.mask(zipCodeElem);
  }

  function expandDisclaimerHandler() {
    var wrapperElem = expandDisclaimerElem.parentElement;
    var paragraphElem = wrapperElem.querySelector('p');

    expandDisclaimerElem.addEventListener('mousedown', function(event) {
      event.preventDefault();
      if (paragraphElem.classList.contains('expanded')) {
        paragraphElem.classList.remove('expanded');
        event.target.classList.remove('expanded');
        event.target.innerText = 'rozwiń';
      } else {
        paragraphElem.classList.add('expanded');
        event.target.classList.add('expanded');
        event.target.innerText = 'zwiń';
      }
    });
  }
});
