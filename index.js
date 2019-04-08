const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const selectFrom = from => array => array.slice(from)
const selectTo = to => array => array.slice(0, to)

const compose = (...fns) =>
  fns.reduceRight((prev, next) => value => next(prev(value)), value => value)

const selectFrom3To5 = compose(
  selectFrom(3),
  selectTo(5)
)

const selectFrom1 = selectFrom(1)
const selectFrom2 = selectFrom(2)

selectFrom3To5(nums) //?

compose(
  array => array.map(num => num * 2),
  selectFrom1,
  selectTo(5)
)(nums) //?
