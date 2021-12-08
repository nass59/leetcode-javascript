/**
 * @see https://leetcode.com/problems/pascals-triangle-ii/
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  const row = new Array(rowIndex + 1).fill(1)

  for (let i = 0; i < rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] += row[j - 1]
    }
  }

  return row
}

console.log(getRow(3))
