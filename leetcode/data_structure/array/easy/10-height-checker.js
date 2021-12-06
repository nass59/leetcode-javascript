/**
 * @see https://leetcode.com/problems/height-checker/
 *
 * Time Complexity : O(n log n)
 * Space Complexity : O(1)
 *
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = heights => {
  const sortedArray = [...heights].sort((a, b) => a - b)
  let count = 0

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedArray[i]) count++
  }

  return count
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]))
console.log(heightChecker([5, 1, 2, 3, 4]))
console.log(heightChecker([1, 2, 3, 4, 5]))
