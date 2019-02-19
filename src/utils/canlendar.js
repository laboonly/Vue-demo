
// 获取月份的天数
export const getMonthDays = function (year, month) {
  return new Date(year, month, 0).getDate()
}

// 获取 星期几
export const getWeekday = function (year, month, day) {
  return new Date(year, month, day).getDay()
}

export const getweeksInMonth = function (year, month) {
  let days = this.getMonthDays(year, month)
  let FDW = this.getWeekday(year, month, 1)
}
