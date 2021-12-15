/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
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

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetvcode'))
console.log(firstUniqChar('aabb'))
