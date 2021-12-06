/**
 * @see https://leetcode.com/problems/sort-array-by-parity/
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => {
  let lastIndexEven = 0

  for (let i = 0; i < nums.length; i++) {
    // If the current element is even, then we need to
    // append it just in front of last non 0 element we found.
    if (nums[i] % 2 === 0) {
      let tmp = nums[lastIndexEven]
      nums[lastIndexEven++] = nums[i]
      nums[i] = lastIndexEven - 1 !== i ? tmp : nums[i]
    }
  }

  return nums
}

console.log(sortArrayByParity([3, 1, 2, 4]))
console.log(sortArrayByParity([2, 4]))
console.log(sortArrayByParity([2]))
console.log(sortArrayByParity([1, 2]))
