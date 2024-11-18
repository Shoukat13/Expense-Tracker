import React from "react";
import styles from "./ExpenseForm.module.css";
import { useState } from "react";
export default function ExpenseForm(props){
  // Create state or ref for the inputs here
  const [text, setText]  = useState("");
  const [amountSpent, setExpenseamnt] = useState(0);

    return (
      <form className={styles.form} onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit({
          text: text,
          amount: parseFloat(amountSpent), // Ensure this is a number
        });
        setText(""); // Reset the form after submit
        setExpenseamnt(0); // Reset the form after submit
      }}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          value = {text}
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required onChange={(e) => setText(e.target.value)}
          />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          value = {amountSpent}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
          onChange={(e) => setExpenseamnt(e.target.value)}
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>
    );
}
