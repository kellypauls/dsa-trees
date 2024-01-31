/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;

    function findMinDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findMinDepth(node.right)+1;
      if (node.right === null) return findMinDepth(node.left)+1;
      return Math.min(findMinDepth(node.left), findMinDepth(node.right))+1;
    }
    return findMinDepth(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;

    function findMaxDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findMaxDepth(node.right)+1;
      if (node.right === null) return findMaxDepth(node.left)+1;
      return Math.max(findMaxDepth(node.left), findMaxDepth(node.right))+1;
    }
    return findMaxDepth(this.root)
  }
  

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function findMaxSum(node) {
      if(node === null) return 0;
      const rightSum = findMaxSum(node.right);
      const leftSum = findMaxSum(node.left);
      result = Math.max(result, node.val + rightSum + leftSum);
      return Math.max(0, rightSum + node.val, leftSum + node.val)
    }
    findMaxSum(this.root);
    return result;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;

    let line = [this.root];
    let nearest = null;

    while(line.length) {
      let currentNode = line.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let reassignNearest = currentVal < nearest || nearest === null;
      if (higherThanLowerBound & reassignNearest){
        closest = currentVal;
      }
      if (currentNode.left) line.push(currentNode.left);
      if (currentNode.right) line.push(currentNode.right)
    }
    return nearest

  }

  
}

module.exports = { BinaryTree, BinaryTreeNode };
