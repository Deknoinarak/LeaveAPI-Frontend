const isSelected = (day, val) => {
  return val.isSame(day, "day");
};

const isToday = (day, val) => {
  return !isSelected(day, val) && day.isSame(new Date(), "day");
};

const isThisMonth = (day, val) => {
  return !isToday(day, val) && !day.isSame(val, "month");
};

const dayStyles = (day, val) => {
  if (isThisMonth(day, val))
    return "py-3 d-flex justify-content-center align-items-center text-secondary text-opacity-50 d-flex flex-column";
  if (isToday(day, val))
    return "bg-secondary bg-opacity-25 py-3 d-flex justify-content-center align-items-center d-flex flex-column text-success fw-bold";
  if (isSelected(day, val))
    return "bg-primary py-3 d-flex justify-content-center align-items-center text-light d-flex flex-column";
  return " py-3 d-flex justify-content-center align-items-center d-flex flex-column";
};

export { dayStyles };
