/**
 * @see https://leetcode.com/problems/valid-mountain-array/
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = arr => {
  const length = arr.length
  let i = 0

  // Walk up
  while (i + 1 < length && arr[i] < arr[i + 1]) i++

  // The max cannot be the start or the end of the array
  if (i === 0 || i === length - 1) return false

  // Walk down
  while (i + 1 < length && arr[i] > arr[i + 1]) i++

  return i === length - 1
}

console.log(validMountainArray([1, 3, 2]))
console.log(validMountainArray([2, 1]))
console.log(validMountainArray([3, 5, 5]))
console.log(validMountainArray([0, 2, 3, 2, 1]))
