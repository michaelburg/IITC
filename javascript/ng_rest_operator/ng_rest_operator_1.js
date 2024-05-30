function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(4, 5, 6, 7));
console.log(sumAll(8, 9, 10, 11));
