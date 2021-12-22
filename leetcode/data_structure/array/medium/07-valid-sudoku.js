/**
 * @see https://leetcode.com/problems/valid-sudoku/
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 *
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const size = board.length

  const rows = new Set()
  const columns = new Set()
  const boxes = new Set()

  for (let i = 0; i < size; i++) {
    rows[i] = new Set()
    columns[i] = new Set()
    boxes[i] = new Set()
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const value = board[i][j]

      if (value === '.') continue

      if (rows[i].has(value)) return false
      rows[i].add(value)

      if (columns[j].has(value)) return false
      columns[j].add(value)

      const indexBox = Math.floor(i / 3) * 3 + Math.floor(j / 3)

      if (boxes[indexBox].has(value)) return false
      boxes[indexBox].add(value)
    }
  }

  return true
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(board))
