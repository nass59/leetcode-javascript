/**
 * @see https://leetcode.com/problems/third-maximum-number/
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = nums => {
  const k = 3
  const set = new Set(nums)
  const max = Math.max(...set) // original max

  for (let i = 0; i < k; i++) {
    // get max
    let tmpMax = Math.max(...set)

    // Stop at the third iteration and return the current max
    if (i === k - 1) {
      return tmpMax
    }

    // Remove the current max
    set.delete(tmpMax)

    // Stop the loop if there are no more values
    // and return the original max
    if (set.values().next().done) {
      return max
    }
  }

  return max
}

console.log(thirdMax([12, 3, 8, 9, 12, 12, 7, 8, 12, 4, 3, 8, 1]))
console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))
console.log(thirdMax([2, 2, 2, 1]))
