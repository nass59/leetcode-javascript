/**
 * @see https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 *
 * Time Complexity : O(n), where n is the number of the elements in the array
 * Space Complexity : O(1). We do not use any extra space
 *
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = nums => {
  let counter = 0

  for (let num of nums) {
    if (num.toString().length % 2 === 0) counter++
  }

  return counter
}

console.log(findNumbers([12, 345, 2, 6, 7896]))
console.log(findNumbers([555, 901, 482, 1771]))
