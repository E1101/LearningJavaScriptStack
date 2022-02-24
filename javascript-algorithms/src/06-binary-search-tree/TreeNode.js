export default class TreeNode {
  /**
   * @param {*} [value] - node value.
   * @param {*} [data] - node data (could be anything).
   */
  constructor(value = null, data = null) {
    this.value = value;
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  /**
   * @param {TreeNode} node
   * @return {TreeNode}
   */
  setLeft(node) {
    // Reset parent for left node since it is going to be detached.
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   * @param {TreeNode} node
   * @return {TreeNode}
   */
  setRight(node) {
    // Reset parent for right node since it is going to be detached.
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (node) {
      this.right.parent = this;
    }

    return this;
  }
}
