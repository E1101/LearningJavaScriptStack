import LinkedList from '../02-linked-list/LinkedList';

export class Stack {
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
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * @param {*} value
   */
  push(value) {
    this.linkedList.prepend(value);
  }

  /**
   * @return {*}
   */
  pop() {
    const removedHead = this.linkedList.pop();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @return {*[]}
   */
  toArray() {
    return this.linkedList.toArray();
  }
}
