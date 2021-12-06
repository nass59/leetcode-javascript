/**
 * @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]

    if (sum === target) {
      return [++left, ++right]
    }

    if (sum < target) left++
    if (sum > target) right--
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))
