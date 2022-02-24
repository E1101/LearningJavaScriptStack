import LinkedList from '../02-linked-list/LinkedList';

export class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.linkedList.isEmpty();
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.linkedList.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * @param {*} value
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * @return {*}
   */
  dequeue() {
    const removedHead = this.linkedList.pop();

    return removedHead ? removedHead.value : null;
  }

  /**
   * @return Array
   */
  toArray() {
    return this.linkedList.toArray();
  }
}
