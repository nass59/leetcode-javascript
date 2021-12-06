/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums => {
  nums.sort((a, b) => a - b)

  let result = 0

  for (let i = 0; i < nums.length; i = i + 2) {
    result += nums[i]
  }

  return result
}
