export class HeapContainerNode {
  static createFromArrayHeap(heapContainer, index) {
    return new HeapContainerNode(heapContainer, index);
  }

  /**
   * @param {Array} heapArray
   * @param {Number} index
   */
  constructor(heapArray, index) {
    this.heapArray = heapArray;
    this.index = index;
  }

  /**
   * @return {*}
   */
  value() {
    return this.heapArray[this.index];
  }

  /**
   * @return {*}
   */
  leftChild() {
    if (this.getLeftChildIndex() >= this.heapArray.length) {
      return null;
    }

    return HeapContainerNode.createFromArrayHeap(this.heapArray, this.getLeftChildIndex());
  }

  /**
   * @return {*}
   */
  rightChild() {
    if (this.getRightChildIndex() >= this.heapArray.length) {
      return null;
    }

    return HeapContainerNode.createFromArrayHeap(this.heapArray, this.getRightChildIndex());
  }

  /**
   * @return {*}
   */
  parent() {
    if (this.getParentIndex() < 0) {
      return null;
    }

    return HeapContainerNode.createFromArrayHeap(this.heapArray, this.getParentIndex());
  }

  // Private helper methods:

  /**
   * @return {number}
   * @private
   */
  getLeftChildIndex() {
    return (2 * this.index) + 1;
  }

  /**
   * @return {number}
   * @private
   */
  getRightChildIndex() {
    return (2 * this.index) + 2;
  }

  /**
   * @return {number}
   * @private
   */
  getParentIndex() {
    return Math.floor((this.index - 1) / 2);
  }
}
