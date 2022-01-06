/**
 * @see https://leetcode.com/problems/two-sum-iii-data-structure-design/
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var TwoSum = function () {
  this.map = new Map()
}

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.map.set(number, (this.map.get(number) || 0) + 1)
}

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  for (let entry of this.map.entries()) {
    const [number, count] = entry
    const valueToFind = value - number

    if (valueToFind !== number) {
      if (this.map.has(valueToFind)) {
        return true
      }
    } else if (count > 1) {
      return true
    }
  }

  return false
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
const twoSum = new TwoSum()
twoSum.add(1)
twoSum.add(5)
twoSum.add(7)
twoSum.add(4)
twoSum.add(9)
twoSum.add(11)
twoSum.add(13)
console.log(twoSum.map)
console.log(twoSum.find(9))
console.log(twoSum.find(4))
console.log(twoSum.find(7))
