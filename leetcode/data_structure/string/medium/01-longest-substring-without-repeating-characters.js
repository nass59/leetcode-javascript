/**
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let max = 0
  let idx = 0
  let start = 0
  let chars = new Set()

  while (idx < s.length) {
    const char = s[idx]

    if (chars.has(char)) {
      max = Math.max(max, chars.size)
      chars.clear()
      idx = ++start
    } else {
      chars.add(char)
      idx++
    }
  }

  return Math.max(max, chars.size)
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(min(m,n))
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let max = 0
  let start = 0
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (map.has(char)) {
      start = Math.max(start, map.get(char) + 1)
    }

    max = Math.max(max, i - start + 1)
    map.set(char, i)
  }

  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring(''))
