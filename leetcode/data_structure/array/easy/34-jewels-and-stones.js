/**
 * @see https://leetcode.com/problems/jewels-and-stones/
 *
 * Time Complexity: O(J+S)
 * Space Complexity: O(J)
 *
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  const map = new Map()
  let nbJewels = 0

  for (let jewel of jewels) {
    map.set(jewel, (map.get(jewel) || 0) + 1)
  }

  for (let stone of stones) {
    if (map.has(stone)) nbJewels += map.get(stone)
  }

  return nbJewels
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.log(numJewelsInStones('z', 'ZZ'))
