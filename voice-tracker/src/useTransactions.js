import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from './constants/categories';

const useTransactions = (title) => {
  resetCategories(); //RESET CATEGORIES
  const { transactions } = useContext(ExpenseTrackerContext); // ТРАНЗАКЦИЯ ИЗ КОНТЕКСТА
  console.log(transactions);
  const transactionsPerType = transactions.filter((t) => t.type === title); // СРАВНИВАЕМ ТИП ТРАНЗАЦИИ С ПРОПОМ TITLE--- ЗАГОЛОВОК КАРТЫ
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  ); // СЧИТЫВАЕМ ЗНАЧЕНИЕ AMOUNT
  const categories = title === 'Income' ? incomeCategories : expenseCategories; // ХРАНИТ УСЛОВНОЕ ПРИСВАИВАНИЕ
  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });
  const filteredCategories = categories.filter((c) => c.amount > 0);
  const chartDATA = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  return { total, chartDATA };
};

export default useTransactions;
