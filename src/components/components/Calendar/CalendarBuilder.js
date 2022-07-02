const CalendarBuilder = (type, value) => {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");

  const startWeek = value.clone().startOf("week").startOf("week");
  const endWeek = value.clone().endOf("week").endOf("week");
  const week = startWeek.clone().subtract(1, "day");

  const calendar = [];
  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  const calw = [];
  while (week.isBefore(endWeek, "day")) {
    calw.push(
      Array(7)
        .fill(0)
        .map(() => week.add(1, "day").clone())
    );
  }

  if (type === "M") return calendar;
  else if (type === "W") return calw;
};

export { CalendarBuilder };
