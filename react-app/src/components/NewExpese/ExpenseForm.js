import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = ({ onSaveExpensesData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = e => {
    setUserInput(prevState => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = e => {
    setUserInput(prevState => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = e => {
    setUserInput(prevState => {
      return { ...prevState, enteredDate: new Date(e.target.value) };
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpensesData(expenseData);

    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
