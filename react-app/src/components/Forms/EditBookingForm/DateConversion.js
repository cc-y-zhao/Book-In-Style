const convertedDate = (origDate) => {
  let dateArr = origDate.split(" ");
  let year = dateArr[3];
  let day = dateArr[1];
  let prevMonth = dateArr[2]
  let newMonth;

  if (prevMonth === 'Jan') newMonth = '01';
  if (prevMonth === 'Feb') newMonth = '02';
  if (prevMonth === 'Mar') newMonth = '03';
  if (prevMonth === 'Apr') newMonth = '04';
  if (prevMonth === 'May') newMonth = '05';
  if (prevMonth === 'Jun') newMonth = '06';
  if (prevMonth === 'Jul') newMonth = '07';
  if (prevMonth === 'Aug') newMonth = '08';
  if (prevMonth === 'Sep') newMonth = '09';
  if (prevMonth === 'Oct') newMonth = '10';
  if (prevMonth === 'Nov') newMonth = '11';
  if (prevMonth === 'Dec') newMonth = '12';

  let newDate = year + "-" + newMonth + "-" + day;

  return newDate;
}

export default convertedDate;
