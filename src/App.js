import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";

export default function App() {
  // Initialize expenses state as an array
  const [expenses, setExpenses] = useState([]); 

  // Handle form submission
  const handleSubmit = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...newExpense, id: Math.random().toString() }, // Use toString() to ensure ID is a string
    ]);
  };

  // Calculate balance, profit, and loss
  const balance = expenses.reduce((acc, expense) => acc + (expense.amount || 0), 0);
  const profit = expenses
    .filter((expense) => expense.amount > 0)
    .reduce((acc, expense) => acc + (expense.amount || 0), 0);
  const loss = expenses
    .filter((expense) => expense.amount < 0)
    .reduce((acc, expense) => acc + (expense.amount || 0), 0);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <div className="expenseForm">
        <ExpenseForm onSubmit={handleSubmit} />
        </div>
        <div className="expenseContainer">
          {/* Render Expense Info and Expense List here */}
          <ExpenseInfo balance={balance} profit={profit} loss={loss} />
          <ExpenseList transactions={expenses} />
        </div>
      </div>
    </>
  );
}