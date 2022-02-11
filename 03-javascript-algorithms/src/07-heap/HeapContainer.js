import { HeapContainerNode } from './HeapContainerNode.js';

export class HeapContainer {
  constructor() {
    // Array representation of the heap.
    this.heapArray = [];
    // A map of heap elements for fast lookup.
    this.heapElements = new Map();
  }

  push(value) {
    // Add new item to the end of the heap (shape property is preserved).
    this.heapArray.push(value);
    // Add current item to the map of heap elements for fast access.
    this.heapElements.set(value, value);
  }

  first() {
    if (this.isEmpty()) {
      return null;
    }

    return this.createNodeAtIndex(0);
  }

  /**
   * @return HeapContainerNode
   */
  last() {
    if (this.isEmpty()) {
      return null;
    }

    const lastItem = this.heapArray.length - 1;
    return this.createNodeAtIndex(lastItem);
  }

  /**
   * @param {HeapContainerNode} node
   */
  remove(node) {
    this.heapArray.splice(node.index, 1);
    this.heapElements.delete(node.value());
  }

  /**
   * @return {number}
   */
  size() {
    return this.heapArray.length;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  has(value) {
    return this.heapElements.get(value) !== undefined;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.heapArray.length;
  }

  /**
   * @param {HeapContainerNode} node
   * @param {HeapContainerNode} swapWith
   */
  swap(node, swapWith) {
    const tmp = this.heapArray[swapWith.index];
    this.heapArray[swapWith.index] = this.heapArray[node.index];
    this.heapArray[node.index] = tmp;
  }

  /**
   * @return string
   */
  toString() {
    return this.heapArray.toString();
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.heapArray.length; i += 1) {
      yield this.createNodeAtIndex(i);
    }
  }

  // Private class helper methods:

  /**
   * @param index
   * @return HeapContainerNode
   * @private
   */
  createNodeAtIndex(index) {
    return HeapContainerNode.createFromArrayHeap(this.heapArray, index);
  }
}
