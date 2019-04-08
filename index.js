//compose helper
const compose = (...fns) =>
  fns.reduceRight((prev, next) => value => next(prev(value)), value => value);

//data
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//NAMED PARAMETERS
const select = ({ from, to, array }) => array.slice(from, to);

const result = select({ from: 3, to: 5, array: nums });
console.log(result);

//COMPOSITION
const from = x => array => array.slice(x);
const to = x => array => array.slice(0, x);

const sameResult = compose(
  from(3),
  to(5)
)(nums);

console.log(sameResult);
