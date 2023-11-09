"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {

  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {

  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    let depth = 1;
    let counter = 0;

    let stack = [this.root];

    if (this.root === null) return 0;

    while (stack.length){
      let current = stack.shift();
      if(current.right === null || current.left === null){
        return depth;
      }
      stack.push(current.left, current.right);

      counter++;
      if(counter === 2**(depth-1)){
        depth ++;
        counter = 0;
      }

    }

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    debugger
    if (this.root === null) return 0;
    if (this.left === null && this.right === null) return 0;

    let leftDepth = this.maxDepth()
    let rightDepth = this.maxDepth();

    leftDepth > rightDepth ? 1 + leftDepth : 1 + rightDepth;
  }
//     function traverseLeft(node) {
//       if (node.left === null) return 0;

//       return 1 + traverseLeft(node.left);
//     }

//     function traverseRight(node) {
//       if (node.right === null) return 0;

//       return 1 + traverseRight(node.right);
//     }
// // 1 function give different node
//     let highestDepth = 1;

//     if (this.root === null) return 0;

//     if (this.root.left) {
//       let leftCount = traverseLeft(this.root.left);
//       let rightCount = traverseRight(this.root.right);
//       highestDepth = Math.max(highestDepth, leftCount, rightCount);
//     }

//     if (this.root.right) {
//       let leftCount = traverseLeft(this.root.left);
//       let rightCount = traverseRight(this.root.right);
//       highestDepth = Math.max(highestDepth, leftCount, rightCount);
//       }
//     }






//       // if(current.right === null || current.left === null){
//       //   return depth;
//       // }
//       if(current.left)stack.push(current.left);
//       if(current.right)stack.push(current.right);

//       if(current.left === null && current.right === null){
//         if(depthCounter > highestDepth)
//         highestDepth = depthCounter;
//         depthCounter = 1;
//       } else {

//         depthCounter++;
//       }

//     }
//     return highestDepth;
//   }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
