/**
 * @see https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let minLength = Infinity
  let start = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    while (sum >= target) {
      minLength = Math.min(minLength, i + 1 - start)
      sum -= nums[start++]
    }
  }

  return minLength === Infinity ? 0 : minLength
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
