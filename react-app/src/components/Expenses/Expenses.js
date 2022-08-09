import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {
  const [filtredYear, setFiltredYear] = useState("2020");
  const changeYearFilter = year => {
    setFiltredYear(year);
  };
  const filtredItems = items.filter(
    expense => expense.date.getFullYear().toString() === filtredYear
  );

 
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filtredYear={filtredYear}
          onChangeFilter={changeYearFilter}
        />
        <ExpensesList items={filtredItems} />
      </Card>
    </>
  );
};

export default Expenses;
