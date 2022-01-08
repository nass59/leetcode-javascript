/**
 * @see https://leetcode.com/problems/unique-word-abbreviation/
 *
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
  this.map = new Map()

  for (let word of dictionary) {
    const abbr = this.abbr(word)

    if (this.map.has(abbr)) {
      this.map.get(abbr).add(word)
    } else {
      this.map.set(abbr, new Set([word]))
    }
  }
}

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.abbr = function (word) {
  const wordLength = word.length

  if (wordLength < 3) return word

  return `${word[0]}${wordLength - 2}${word[wordLength - 1]}`
}

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
  const abbr = this.abbr(word)

  if (this.map.has(abbr)) {
    const set = this.map.get(abbr)
    return set.has(word) && set.size === 1
  }

  return true
}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */

const validWordAbbr = new ValidWordAbbr(['deer', 'door', 'cake', 'card'])
console.log(validWordAbbr.isUnique('dear')) // return false, dictionary word "deer" and word "dear" have the same abbreviation "d2r" but are not the same.
console.log(validWordAbbr.isUnique('door')) // return false, dictionary word "deer" and word "dear" have the same abbreviation "d2r" but are not the same.
console.log(validWordAbbr.isUnique('cart')) // return true, no words in the dictionary have the abbreviation "c2t".
console.log(validWordAbbr.isUnique('cane')) // return false, dictionary word "cake" and word "cane" have the same abbreviation  "c2e" but are not the same.
console.log(validWordAbbr.isUnique('make')) // return true, no words in the dictionary have the abbreviation "m2e".
console.log(validWordAbbr.isUnique('cake')) // return true, because "cake" is already in the dictionary and no other word in the dictionary has "c2e" abbreviation.
