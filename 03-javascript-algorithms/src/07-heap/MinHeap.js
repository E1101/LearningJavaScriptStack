// Import dependencies.
import Comparator from './comparator/Comparator.js';
import { HeapContainer } from './HeapContainer.js';

/**
 * MinHeap class.
 */
export class MinHeap {
  /**
   * @constructs MinHeap
   * @param {Function} [compareFunction]
   */
  constructor(compareFunction) {
    this.heapContainer = new HeapContainer();

    // Allow class consumers to change the way the heap elements are compared with each other.
    // This is particularly useful when we want to save objects in a heap.
    this.comparator = new Comparator(compareFunction);
  }

  /**
   * @param {*} item
   * @return {MinHeap}
   */
  add(item) {
    this.heapContainer.push(item);

    // Make sure that the heap-property is preserved by moving the
    // element up in case if it smaller than its parent.
    this.siftUp();

    return this;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.heapContainer.isEmpty()) {
      return null;
    }

    return this.heapContainer.first().value();
  }

  /**
   * @return {*}
   */
  poll() {
    if (this.heapContainer.isEmpty()) {
      // If heap is empty then there is nothing to poll.
      return null;
    }

    const headItem = this.heapContainer.first();
    const headItemValue = headItem.value();

    if (this.heapContainer.size() === 1) {
      this.heapContainer.remove(headItem);

      return headItemValue;
    }

    const lastItem = this.heapContainer.last();

    // Move the last element from the end to the head to preserve the "shape property".
    this.heapContainer.swap(headItem, lastItem);
    this.heapContainer.remove(lastItem);

    // Heapify the heap down in order to preserve the "heap-property".
    this.siftDown();

    return headItemValue;
  }

  /**
   * @param {*} value
   * @param {Comparator} [comparator]
   * @return {MinHeap}
   */
  remove(value, comparator = this.comparator) {
    let iteration = 0;
    for (const node of this.heapContainer) {
      iteration += 1;
      if (!comparator.equal(value, node.value())) {
        continue;
      }

      if (iteration === this.heapContainer.size()) {
        // If we need to remove last child in the heap then just remove it.
        // There is no need to heapify the heap afterwards.
        this.heapContainer.remove(node);

        break;
      }

      // Move last element in heap to the vacant (removed) position.
      this.heapContainer.swap(node, this.heapContainer.last());
      this.heapContainer.remove(this.heapContainer.last());

      // If there is no parent or parent is in correct order with the node
      // we're going to delete then heapify down. Otherwise heapify up.
      if (
        node.leftChild() // to check has any child because left will filled before right
        && (!node.parent() || comparator.lessThanOrEqual(node.parent().value(), node.value()))
      ) {
        this.siftDown(node);
      } else {
        this.siftUp(node);
      }
    }

    return this;
  }

  /**
   * @return {Boolean}
   */
  isEmpty() {
    return this.heapContainer.isEmpty();
  }

  // Private helper methods:

  /**
   * Take the last element (last in array or the bottom left in a tree)
   * in the heap container and lift it up until it is in the correct
   * order with respect to its parent element.
   *
   * @private
   */
  siftUp(nodeToHeapify = undefined) {
    let node = nodeToHeapify || this.heapContainer.last();
    while (
      node.parent()
      && this.comparator.lessThan(node.value(), node.parent().value())
    ) {
      this.heapContainer.swap(node, node.parent());
      node = node.parent();
    }
  }

  /**
   * Compare the parent element to its children and swap parent with the appropriate
   * child (smallest child for MinHeap, largest child for MaxHeap).
   * Do the same for next children after swap.
   */
  siftDown(nodeToHeapify = undefined) {
    let node = nodeToHeapify || this.heapContainer.first();
    while (node.leftChild()) { // to check has any child because left will filled before right
      let childNode = null;

      if (
        node.rightChild()
        && this.comparator.lessThanOrEqual(node.rightChild().value(), node.leftChild().value())
      ) {
        childNode = node.rightChild();
      } else {
        childNode = node.leftChild();
      }

      if (this.comparator.lessThanOrEqual(node.value(), childNode.value())) {
        break;
      }

      this.heapContainer.swap(node, childNode);
      node = childNode;
    }
  }
}
