const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case 'DELETE__TRANSACTION':
      transactions = state.filter((t) => t.id !== action.payload);

      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    case 'ADD__TRANSACTION':
      transactions = [action.payload, ...state];
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
