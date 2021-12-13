/**
 * @see https://leetcode.com/problems/single-number/
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let hashMap = new Map()

  nums.forEach(num => {
    if (hashMap.get(num)) hashMap.delete(num)
    else hashMap.set(num, true)
  })

  return hashMap.keys().next().value
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => nums.reduce((res, n) => res ^ n)

console.log(singleNumber([4, 1, 2, 1, 2, 5]))
