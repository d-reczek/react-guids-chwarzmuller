import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpensesHandler }) => {
  const saveExpenseData = enteredExpenses => {
    const expenseData = {
      ...enteredExpenses,
      id: Math.random().toString(),
    };
    onAddExpensesHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensesData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
