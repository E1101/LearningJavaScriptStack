export default class BinarySearchTreeNode {
  /**
   * @param {BinarySearchTreeNode} sourceNode
   * @param {BinarySearchTreeNode} targetNode
   */
  static copyNode(sourceNode, targetNode) {
    targetNode.value = sourceNode.value;
    targetNode.data = sourceNode.data;
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

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

  detach() {
    const { parent } = this;

    if (parent) {
      if (parent.left && parent.left === this) {
        parent.left = null;
      }

      if (parent.right && parent.right === this) {
        parent.right = null;
      }

      this.parent = null;
    } else if (!(this.left || this.right)) {
      // its a root
      this.value = undefined;
    }
  }

  /**
   * @param {BinarySearchTreeNode} node
   * @return {BinarySearchTreeNode}
   */
  setLeft(node) {
    if (this.value < node.value) {
      throw new Error('Left node should have a value less than of parent node');
    }

    // Reset parent for left node since
    // it is going to be detached.
    if (this.left) {
      this.left.detach();
    }

    node.parent = this;
    this.left = node;

    return this;
  }

  /**
   * @param {BinarySearchTreeNode} node
   * @return {BinarySearchTreeNode}
   */
  setRight(node) {
    if (this.value > node.value) {
      throw new Error('Right node should have a value more than of parent node');
    }

    // Reset parent for right node since
    // it is going to be detached.
    if (this.right) {
      this.right.detach();
    }

    node.parent = this;
    this.right = node;

    return this;
  }

  /**
   * @param {*} value
   * @param {*} [data] - node data (could be anything).
   * @return {BinarySearchTreeNode}
   */
  insert(value, data) {
    if (this.value === null) {
      this.value = value;
      this.data = data;

      return this;
    }

    // Insert to the left:
    //
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value, data);
      }

      const newNode = new BinarySearchTreeNode(value, data);
      this.setLeft(newNode);

      return newNode;
    }

    // Insert to the right:
    //
    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value, data);
      }

      const newNode = new BinarySearchTreeNode(value, data);
      this.setRight(newNode);

      return newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  find(value) {
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left) {
      return this.left.find(value);
    }

    if (value > this.value && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    // it's short way to cast a variable to
    // be a boolean (true or false) value.
    return !!this.find(value);
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  findMax() {
    if (!this.right) {
      return this;
    }

    return this.right.findMax();
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      return false;
    }

    // Node is a leaf and thus has no children
    //
    if (!nodeToRemove.left && !nodeToRemove.right) {
      nodeToRemove.detach();

      return true;
    }

    // Node to be removed has two children.
    //
    if (nodeToRemove.left && nodeToRemove.right) {
      // search for min node in right because it's still higher than all
      // nodes to the left to be replaced with deleted node
      const closestNodeToRemovedOne = nodeToRemove.right.findMin();
      if (closestNodeToRemovedOne !== nodeToRemove.right) {
        nodeToRemove.value = closestNodeToRemovedOne.value;
        nodeToRemove.data = closestNodeToRemovedOne.data;
        this.remove(closestNodeToRemovedOne.value);
      } else {
        // In case if next right value is the next bigger one and it doesn't have left child
        // then just replace node that is going to be deleted with the right node.
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.data = nodeToRemove.right.data;
        nodeToRemove.setRight(nodeToRemove.right.right);
      }

      return true;
    }

    // Node has only one child.
    // Make this child to be a direct child of current node's parent.
    /** @var BinarySearchTreeNode */
    const childNode = nodeToRemove.left || nodeToRemove.right;
    if (nodeToRemove.parent) {
      nodeToRemove.parent.replaceChild(nodeToRemove, childNode);
    } else {
      // It's root
      BinarySearchTreeNode.copyNode(childNode, nodeToRemove);
    }

    // Clear the parent of removed node.
    nodeToRemove.detach();

    return true;
  }

  /**
   * @return {*[]}
   */
  traverseInOrder() {
    let traverse = [];

    // Add left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // Add root.
    traverse.push(this.value);

    // Add right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  /**
   * @private
   * @param {BinarySearchTreeNode} nodeToReplace
   * @param {BinarySearchTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {
    replacementNode.parent = this;

    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode;

      return true;
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode;

      return true;
    }

    return false;
  }
}
