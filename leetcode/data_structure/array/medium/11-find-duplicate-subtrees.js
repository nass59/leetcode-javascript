/**
 * @see https://leetcode.com/problems/find-duplicate-subtrees/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = root => {
  const map = new Map()
  const res = []

  dfs(root, map, res)

  return res
}

const dfs = (root, map, res) => {
  if (!root) return '#'

  const subtree = `${root.val}.${dfs(root.left, map, res)}.${dfs(
    root.right,
    map,
    res
  )}`

  map.set(subtree, (map.get(subtree) || 0) + 1)

  if (map.get(subtree) === 2) {
    res.push(root)
  }

  return subtree
}
