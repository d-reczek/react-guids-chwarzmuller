import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ items }) => {
  const [yearValue, setYearValue] = useState(null);
  const onSelecetDateValue = year => {
    setYearValue(year);
    console.log(yearValue);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter saveYearValue={onSelecetDateValue} />
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
