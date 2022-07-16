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
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </Card>
    </>
  );
};

export default Expenses;
