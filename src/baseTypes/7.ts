/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Satterday,
  Sunday,
}

function isWeekend(day: WeekDay): boolean {
  return WeekDay[day].startsWith("S");
}
