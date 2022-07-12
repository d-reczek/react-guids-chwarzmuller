import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expnseDate = new Date(2021, 2, 22);
  const expenseTitle = "Car insruance";
  const expenseAmount = 2137;
  return (
    <div className="expense-item">
      <div>{expnseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
