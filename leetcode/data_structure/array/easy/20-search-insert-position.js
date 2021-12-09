/**
 * @see https://leetcode.com/problems/search-insert-position/
 *
 * Time complexity: O(log n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let pivot = null
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    pivot = start + Math.ceil((end - start) / 2)

    if (nums[pivot] === target) {
      return pivot
    }

    if (target < nums[pivot]) {
      end = pivot - 1
    } else {
      start = pivot + 1
    }
  }

  return start
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1], 0))
