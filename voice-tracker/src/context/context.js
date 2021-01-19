import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState); // Хранит масив Созданных Транзакций

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE__TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD__TRANSACTION', payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
