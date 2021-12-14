/**
 * @see https://leetcode.com/problems/isomorphic-strings/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const hashMap = new Map()
  const assignedValues = new Set()

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      if (hashMap.get(s[i]) !== t[i]) return false
    } else {
      if (assignedValues.has(t[i])) return false

      assignedValues.add(t[i])
      hashMap.set(s[i], t[i])
    }
  }

  return true
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  const hashMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], t[i])
    } else if (hashMap.get(s[i]) !== t[i]) {
      return false
    }
  }

  return new Set([...hashMap.values()]).size === hashMap.size
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  const sHashMap = new Map()
  const tHashMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (
      (sHashMap.has(s[i]) && sHashMap.get(s[i]) !== t[i]) ||
      (tHashMap.has(t[i]) && tHashMap.get(t[i]) !== s[i])
    ) {
      return false
    }

    sHashMap.set(s[i], t[i])
    tHashMap.set(t[i], s[i])
  }

  return true
}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))
