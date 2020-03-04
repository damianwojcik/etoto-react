import React, { useState } from 'react';
import './App.css';
import STEP_1_1 from './components/STEP_1_1';
import STEP_1_2 from './components/STEP_1_2';
import STEP_1_3 from './components/STEP_1_3';
import STEP_2 from './components/STEP_2';
import STEP_3 from './components/STEP_3';

function App() {
  const [currentPage, setCurrentPage] = useState('3');
  const [form, setForm] = useState({
    email: '',
    password: '',
    checkbox1: '',
    checkbox2: ''
  });
  let currentPageComponent = <STEP_1_1 setCurrentPage={setCurrentPage} />;

  switch (currentPage) {
    case '1_1':
      currentPageComponent = <STEP_1_1 setCurrentPage={setCurrentPage} />;
      break;
    case '1_2':
      currentPageComponent = <STEP_1_2 setCurrentPage={setCurrentPage} />;
      break;
    case '1_3':
      currentPageComponent = <STEP_1_3 setCurrentPage={setCurrentPage} />;
      break;
    case '2':
      currentPageComponent = <STEP_2 setCurrentPage={setCurrentPage} />;
      break;
    case '3':
      currentPageComponent = <STEP_3 setCurrentPage={setCurrentPage} />;
      break;
    default:
      currentPageComponent = <STEP_1_1 setCurrentPage={setCurrentPage} />;
      break;
  }

  return currentPageComponent;
}

export default App;
