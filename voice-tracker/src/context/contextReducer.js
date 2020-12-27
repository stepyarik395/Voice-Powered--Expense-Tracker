const contextReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE__TRANSACTION':
      console.log('33333');
      break;
    case 'ADD__TRANSACTION':
    default:
      break;
  }
};

export default contextReducer;
