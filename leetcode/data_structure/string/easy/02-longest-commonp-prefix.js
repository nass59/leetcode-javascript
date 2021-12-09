/**
 * @see https://leetcode.com/problems/longest-common-prefix/
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  strs.sort()

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i)
  }

  return strs[0]
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['abca', 'aba', 'aaab']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
console.log(longestCommonPrefix(['a']))
console.log(longestCommonPrefix(['reflower', 'flow', 'flight']))
