/**
 * @see https://leetcode.com/problems/spiral-matrix/
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  const res = []

  while (matrix.length) {
    const first = matrix.shift()
    res.push(...first)

    for (const m of matrix) {
      let val = m.pop()

      if (val) res.push(val)
      m.reverse()
    }

    matrix.reverse()
  }
  return res
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  const result = []
  const moves = new Map()
  moves.set('up', 'right')
  moves.set('right', 'down')
  moves.set('down', 'left')
  moves.set('left', 'up')

  const m = matrix.length
  const n = matrix[0].length

  let row = 0
  let column = 0

  nextMove = moves.get('up')

  const isNull = () => matrix[row][column] === null

  while (nextMove !== null) {
    if (nextMove === 'right') {
      while (column < n && !isNull()) {
        result.push(matrix[row][column])
        matrix[row][column++] = null
      }

      row++
      column--
      nextMove = row < m ? moves.get('right') : null
    }

    if (nextMove === 'down') {
      while (row < m && !isNull()) {
        result.push(matrix[row][column])
        matrix[row++][column] = null
      }

      row--
      column--
      nextMove = column >= 0 ? moves.get('down') : null
    }

    if (nextMove === 'left') {
      while (column >= 0 && !isNull()) {
        result.push(matrix[row][column])
        matrix[row][column--] = null
      }

      row--
      column++
      nextMove = isNull() ? null : moves.get('left')
    }

    if (nextMove === 'up') {
      while (row >= 0 && !isNull()) {
        result.push(matrix[row][column])
        matrix[row--][column] = null
      }

      row++
      column++
      nextMove = isNull() ? null : moves.get('up')
    }
  }

  return result
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
)

console.log(spiralOrder([[1, 2, 3]]))

console.log(spiralOrder([[1, 2]]))

console.log(spiralOrder([[1]]))

console.log(spiralOrder([[1], [2]]))

console.log(spiralOrder([[1], [2], [3]]))
