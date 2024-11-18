import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

export default function ExpenseList(props){
    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {/* Display transactions here */}
          {props.transactions.map((expense, index) => (
          <Transaction key={expense.id} expense={expense} index={index} />
        ))}
        </ul>
      </div>
    );
}
