import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode();
  }

  /**
   * Find the node by its value.
   * @param {*} value
   * @return {TreeNode}
   */
  find(value) {
    return this.root.find(value).data;
  }

  /**
   * Find the node with min value.
   * @return {TreeNode}
   */
  findMin() {
    return this.root.findMin().data;
  }

  /**
   * Find the node with max value.
   * @return {TreeNode}
   */
  findMax() {
    return this.root.findMax().data;
  }

  /**
   * Insert the new node in a tree.
   * @param {*} value
   * @param {*} [data] - node data (could be anything).
   * @return {TreeNode}
   */
  insert(value, data = null) {
    return this.root.insert(value, data);
  }

  /**
   * Check if tree contains the node with specific value.
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return this.root.contains(value);
  }

  /**
   * Remove the node from a tree by its value.
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value);
  }
}
