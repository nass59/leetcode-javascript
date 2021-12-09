/**
 * @see https://leetcode.com/problems/reverse-words-in-a-string-iii/
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => {
  return s
    .trim()
    .split(/\s+/)
    .map(word => word.split('').reverse().join(''))
    .join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords('God Ding'))

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords2 = s => {
  let arr = []
  let currentWord = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      currentWord.push(s[i])
    } else {
      arr.push(currentWord.reverse().join(''))
      currentWord = []
    }
  }

  arr.push(currentWord.reverse().join(''))

  return arr.join(' ')
}

console.log(reverseWords2("Let's take LeetCode contest"))
console.log(reverseWords2('God Ding'))
