/**
 * @see https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const firstUniqChar2 = s => {
  const map = new Map()
  const repetedChars = new Set()

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i]) && !repetedChars.has(s[i])) {
      map.set(s[i], i)
    } else {
      map.delete(s[i])
      repetedChars.add(s[i])
    }
  }

  return map.size === 0 ? -1 : [...map.values()][0]
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const firstUniqChar1 = s => {
  const map = new Map()

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}

/**
 * Time complexity: O(n^2)
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetvcode'))
console.log(firstUniqChar('aabb'))
