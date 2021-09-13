import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

function ExpenseItem(props) {

  return (
    <Card className="maincomponent">
      <ExpenseDate date={props.date} />
      <div className = "expensedescription">
        <h2>{props.title}</h2>
        <div className="expenseprice">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;