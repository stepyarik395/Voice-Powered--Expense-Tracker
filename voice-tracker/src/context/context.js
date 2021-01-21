import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState); // Хранит масив Созданных Транзакций

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE__TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD__TRANSACTION', payload: transaction });
  };
  const balance = transactions.reduce((acc, currVal) => {
    return (
      currVal.type === 'Expance' ? acc - currVal.amount : acc + currVal.amount,
      0
    );
  });
  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
