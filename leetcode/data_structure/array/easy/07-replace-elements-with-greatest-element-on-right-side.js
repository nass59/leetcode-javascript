/**
 * @see https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 *
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr => {
  const result = new Array(arr.length)
  result[arr.length - 1] = -1

  for (let i = arr.length - 1; i > 0; i -= 1) {
    result[i - 1] = Math.max(arr[i], result[i])
  }

  return result
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]))
console.log(replaceElements([400]))
