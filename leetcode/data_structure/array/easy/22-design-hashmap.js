/**
 * @see https://leetcode.com/problems/design-hashmap/
 */
const MyHashMap = function () {
  this.hashMap = {}
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.hashMap[key] = value
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.hashMap[key] === undefined ? -1 : this.hashMap[key]
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.hashMap[key]
}

const myHashMap = new MyHashMap()
myHashMap.put(1, 1) // The map is now [[1,1]]
myHashMap.put(2, 2) // The map is now [[1,1], [2,2]]
myHashMap.get(1) // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3) // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1) // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2) // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2) // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2) // return -1 (i.e., not found), The map is now [[1,1]]
