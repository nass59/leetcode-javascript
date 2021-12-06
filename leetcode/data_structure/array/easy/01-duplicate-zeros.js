/**
 * @see https://leetcode.com/problems/duplicate-zeros/
 *
 * Time Complexity : O(n), where n is the number of the elements in the array
 * Space Complexity : O(1). We do not use any extra space
 *
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = arr => {
  let tmp = []

  for (let i = 0; i < arr.length; i++) {
    if (tmp.length) {
      tmp.unshift(arr[i])
      arr[i] = tmp.pop()
    }

    if (arr[i] === 0 && i + 1 <= arr.length - 1) {
      tmp.unshift(arr[i + 1])
      arr[i + 1] = 0
      i++
    }
  }
}

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros2 = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
      arr.pop()
    }
  }
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 0, 5, 0, 1, 9]))
console.log(duplicateZeros([0, 1, 7, 6, 0, 2, 0, 7]))
console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0]))
console.log(duplicateZeros2([1, 5, 2, 0, 6, 8, 0, 6, 0]))
