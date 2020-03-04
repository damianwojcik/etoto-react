import React, { useState } from 'react';
import Logo from './components/Logo';
import Header from './components/Header';
import STEP_1_1 from './components/form/STEP_1_1';
import STEP_1_2 from './components/form/STEP_1_2';
import STEP_1_3 from './components/form/STEP_1_3';
import STEP_2 from './components/form/STEP_2';
import STEP_3 from './components/form/STEP_3';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('1_1');
  const [form, setForm] = useState({
    email: '',
    password: '',
    checkbox1: false,
    checkbox2: false,
    firstName: '',
    lastName: '',
    nationality: '',
    pesel: '',
    identityNumber: '',
    identityExpiryDate: '',
    country: '',
    address: '',
    zipCode: '',
    city: '',
    phone: '',
    checkbox3: '',
    bets_daily: '',
    bets_monthly: '',
    time_daily: '',
    time_monthly: ''
  });
  let currentPageComponent = '';

  switch (currentPage) {
    case '1_1':
      currentPageComponent = (
        <STEP_1_1
          setCurrentPage={setCurrentPage}
          form={form}
          setForm={setForm}
        />
      );
      break;
    case '1_2':
      currentPageComponent = <STEP_1_2 setCurrentPage={setCurrentPage} />;
      break;
    case '1_3':
      currentPageComponent = (
        <STEP_1_3
          setCurrentPage={setCurrentPage}
          form={form}
          setForm={setForm}
        />
      );
      break;
    case '2':
      currentPageComponent = (
        <STEP_2 setCurrentPage={setCurrentPage} form={form} setForm={setForm} />
      );
      break;
    case '3':
      currentPageComponent = (
        <STEP_3 setCurrentPage={setCurrentPage} form={form} setForm={setForm} />
      );
      break;
    default:
      // error component
      currentPageComponent = <STEP_1_1 setCurrentPage={setCurrentPage} />;
      break;
  }

  return (
    <div className="page-wrapper">
      <Logo />
      <Header currentPage={currentPage} />
      <form className="form">{currentPageComponent}</form>
    </div>
  );
}

export default App;
