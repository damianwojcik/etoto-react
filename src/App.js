import React, { useState } from 'react';
import './App.css';
import STEP_1_1 from './views/STEP_1_1';
import STEP_1_2 from './views/STEP_1_2';
import STEP_1_3 from './views/STEP_1_3';
import STEP_2 from './views/STEP_2';
import STEP_3 from './views/STEP_3';

function App() {
  const [currentPage, setCurrentPage] = useState('1_1');
  const [form, setForm] = useState({
    email: '',
    password: '',
    checkbox1: false,
    checkbox2: false
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
