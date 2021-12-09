/**
 * @see https://leetcode.com/problems/reverse-words-in-a-string/
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => {
  return s.trim().split(/\s+/).reverse().join(' ')
}

console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world  '))
console.log(reverseWords('a good   example'))
console.log(reverseWords('  Bob    Loves  Alice   '))
console.log(reverseWords('Alice does not even like bob'))

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords2 = s => {
  let arr = []
  let currentWord = []

  for (let i = 0; i < s.length; i++) {
    let isSpace = s[i] === ' '

    if (!isSpace) {
      currentWord.push(s[i])
    }

    if (isSpace && currentWord.length > 0) {
      arr.unshift(currentWord.join(''))
      currentWord = []
    }
  }

  if (currentWord.length > 0) {
    arr.unshift(currentWord.join(''))
  }

  return arr.join(' ')
}

console.log(reverseWords2('the sky is blue'))
console.log(reverseWords2('  hello world  '))
console.log(reverseWords2('a good   example'))
console.log(reverseWords2('  Bob    Loves  Alice   '))
console.log(reverseWords2('Alice does not even like bob'))
