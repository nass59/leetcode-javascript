/**
 * @param {string[]} strings
 * @return {string[][]}
 */
const groupStrings = strings => {
  const map = new Map()

  for (let str of strings) {
    const key = new Array(str.length).fill(0)

    for (let i = 1; i < str.length; i++) {
      key[i] = str.charCodeAt(i - 1) - (str.charCodeAt(i) + 26)
      if (Math.abs(key[i]) > 25) key[i] %= 26
    }

    const hash = key.toString()

    if (map.has(hash)) map.set(hash, [...map.get(hash), str])
    else map.set(hash, [str])
  }

  return [...map.values()]
}

console.log(groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']))
