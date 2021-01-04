const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  const day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.lenght < 2) {
    month = `0${month}`;
  }
  if (day.lenght < 2) {
    day = `0${day}`;
  }
  return [day, month, year].join('-');
};
export default formatDate;
