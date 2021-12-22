/**
 * @see https://leetcode.com/problems/group-shifted-strings/
 *
 * Time Complexity: O(n*klog(k))
 * Space Complexity: O(n*k)
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const map = new Map()

  for (let str of strs) {
    const sorted = str.split('').sort().join('')

    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), str])
    } else {
      map.set(sorted, [str])
    }
  }

  return [...map.values()]
}

const grouspAnagrams = strs => {
  let res = {}

  for (let str of strs) {
    let count = new Array(26).fill(0)

    for (let char of str) {
      count[char.charCodeAt() - 97]++
    }

    const key = count.join('#')

    if (res[key]) res[key].push(str)
    else res[key] = [str]
  }

  return Object.values(res)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['']))
console.log(groupAnagrams(['a']))
