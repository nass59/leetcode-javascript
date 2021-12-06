/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
  let disappearedNumbers = []

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1

    if (nums[index] > 0) {
      nums[index] *= -1
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      disappearedNumbers.push(i + 1)
    }
  }

  return disappearedNumbers
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const findDisappearedNumbers = nums => {
  let disappearedNumbers = []

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(i + 1) < 0) {
      disappearedNumbers.push(i + 1)
    }
  }

  return disappearedNumbers
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
// console.log(findDisappearedNumbers([1, 1]))
