/**
 * @see https://leetcode.com/problems/design-hashset/
 */
const MyHashSet = function () {
  this.hashSet = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) {
    this.hashSet.push(key)
  }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this.hashSet.length; i++) {
    if (this.hashSet[i] === key) {
      this.hashSet.splice(i, 1)
    }
  }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  for (let i = 0; i < this.hashSet.length; i++) {
    if (this.hashSet[i] === key) {
      return true
    }
  }

  return false
}
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var myHashSet = new MyHashSet()
myHashSet.add(1)
console.log(myHashSet.hashSet)
myHashSet.add(2)
console.log(myHashSet.contains(1))
console.log(myHashSet.contains(3))
myHashSet.add(2)
myHashSet.remove(2)
