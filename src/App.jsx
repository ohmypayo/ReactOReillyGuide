import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Milk',
      amount: 5.36,
      date: new Date(2021, 9, 9),
    },
    {
      id: 2,
      title: 'Chocolate',
      amount: 2.32,
      date: new Date(2021, 9, 10),
    },
  ];

  return (

    <div>
      Test
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;