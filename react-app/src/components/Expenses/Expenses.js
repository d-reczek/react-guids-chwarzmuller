import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ items }) => {
  const [filtredYear, setFiltredYear] = useState("2020");
  const changeYearFilter = year => {
    setFiltredYear(year);
    console.log(filtredYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filtredYear={filtredYear}
          onChangeFilter={changeYearFilter}
        />
        {items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
