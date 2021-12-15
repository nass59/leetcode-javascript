/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const map = new Map()
  let choices = []
  let minSum = Infinity

  list1.forEach((choice, id) => map.set(choice, id))

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      const sum = map.get(list2[i]) + i

      map.set(list2[i], sum)

      if (sum < minSum) {
        minSum = sum
        // if this is the least list index sum we only store this value
        choices = [list2[i]]
      } else if (sum === minSum) {
        // if this is not the only choice with the same index sum, we add it to the list
        choices.push(list2[i])
      }
    }
  }

  return choices
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']
  )
)

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
)

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']
  )
)
