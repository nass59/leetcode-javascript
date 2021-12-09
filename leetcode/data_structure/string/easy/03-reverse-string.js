/**
 * @see https://leetcode.com/problems/reverse-string/
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const tmp = s[i]
    s[i] = s[j]
    s[j] = tmp
  }
}

/**
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString2 = s => {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    const tmp = s[left]
    s[left++] = s[right]
    s[right--] = tmp
  }
}

console.log(reverseString2(['h', 'e', 'l', 'l', 'o']))
