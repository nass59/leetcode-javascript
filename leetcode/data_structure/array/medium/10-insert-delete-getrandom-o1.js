/**
 * @see https://leetcode.com/problems/insert-delete-getrandom-o1/
 */
var RandomizedSet = function () {
  this.map = new Map()
  this.arr = []
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false

  this.map.set(val, this.arr.length)
  this.arr.push(val)

  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false

  let lastElmt = this.arr[this.arr.length - 1]
  let idx = this.map.get(val)

  this.arr[idx] = lastElmt
  this.arr.pop()

  this.map.set(lastElmt, idx)
  this.map.delete(val)

  return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)]
}
