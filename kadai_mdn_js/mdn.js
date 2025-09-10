const today = new Date();

console.log(today.getFullYear() -1);
console.log(today.getMonth() +2);
console.log(today.getDate() +2);

const formatteedDate = '${year}年${month}月${day}日';

document.addEventListener('DOMContentLoaded', () => {
  const dateDisplayElement = document.getElementById('date-display');
  dateDisplayElement.textContent = formatteedDate;
});
