/**
 * @see https://leetcode.com/problems/check-if-n-and-its-double-exist/
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = arr => {
  while (arr.length) {
    const value = arr.pop()
    if (arr.includes(value * 2) || arr.includes(value / 2)) return true
  }

  return false
}

console.log(checkIfExist([10, 2, 5, 3]))
console.log(checkIfExist([7, 1, 14, 11]))
console.log(checkIfExist([3, 1, 7, 11]))
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]))
