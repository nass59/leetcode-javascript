/**
 * @see https://leetcode.com/problems/diagonal-traverse/
 *
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = mat => {
  const result = []
  let m = mat.length // nb rows
  let n = mat[0].length // nb columns
  let direction = 1 // 1 => up, -1 => down

  let row = 0
  let column = 0

  let count = 0

  while (count < m * n) {
    result.push(mat[row][column])

    if (direction > 0) {
      if (canGoRight(column, n)) {
        // we go right
        column++
        // if we are at the top and we change direction
        if (row === 0) direction *= -1
        // else we go up
        else row--
      } else {
        // we go down
        row++
        // and we change direction
        direction *= -1
      }
    } else {
      if (canGoDown(row, m)) {
        // we can go down
        row++
        // if we can go down and left
        if (canGoLeft(column)) column--
        // else we change direction
        else direction *= -1
      } else if (canGoRight(column, n)) {
        column++
        direction *= -1
      }
    }

    count++
  }

  return result
}

/**
 * @param {number} column
 * @param {number} n
 * @returns {boolean}
 */
const canGoRight = (column, n) => column + 1 < n

/**
 * @param {number} column
 * @returns {boolean}
 */
const canGoLeft = column => column - 1 >= 0

/**
 * @param {number} row
 * @param {number} m
 * @returns {boolean}
 */
const canGoDown = (row, m) => row + 1 < m

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
)

console.log(findDiagonalOrder([[2, 3]]))

console.log(findDiagonalOrder([[3], [2]]))

console.log(findDiagonalOrder([[6, 9, 7]]))
console.log(
  findDiagonalOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
)
