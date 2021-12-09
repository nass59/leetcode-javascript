/**
 * @see https://leetcode.com/problems/implement-strstr/
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) =>
  needle.length === 0 ? 0 : haystack.indexOf(needle)

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
console.log(strStr('', ''))
console.log(strStr('', 'a'))
console.log(strStr('aaa', 'aaaa'))
console.log(strStr('mississippi', 'issip'))
