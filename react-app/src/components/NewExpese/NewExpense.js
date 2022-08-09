import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpensesHandler }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = enteredExpenses => {
    const expenseData = {
      ...enteredExpenses,
      id: Math.random().toString(),
    };
    onAddExpensesHandler(expenseData);
    setIsEditing(false);
  };
  const isEditingHandler = () => {
    setIsEditing(prevState => !prevState);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={isEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={isEditingHandler}
          onSaveExpensesData={saveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
