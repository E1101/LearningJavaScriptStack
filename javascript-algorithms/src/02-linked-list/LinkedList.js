import LinkedListNode from './LinkedListNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
  * @param {*} value
  * @return {LinkedList}
  */
  prepend(value) {
    this.head = new LinkedListNode(value, this.head);

    if (!this.tail) {
      this.tail = this.head;
    }

    return this;
  }

  /**
  * @param {*} value
  * @return {LinkedList}
  */
  append(value) {
    if (this.isEmpty()) {
      return this.prepend(value);
    }

    const newNode = new LinkedListNode(value);
    const currentTail = this.tail;
    currentTail.link(newNode);

    this.tail = newNode;

    return this;
  }

  isEmpty() {
    return this.head === null;
  }

  /**
  * @param {function} callback
  * @return {LinkedListNode}
  */
  unset(callback) {
    let previousNode;
    let currentNode = this.head;
    while (currentNode) {
      if (callback(currentNode.value)) {
        if (currentNode === this.head) {
          return this.pop();
        }

        if (currentNode.next === null) {
          return this.unshift();
        }

        previousNode.link(currentNode.next);
        currentNode.unlink();

        return currentNode;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {LinkedListNode}
   */
  pop() {
    if (this.isEmpty()) return null;

    const currentHead = this.head;
    this.head = currentHead.next;

    if (!this.head) {
      this.tail = null;
    }

    return currentHead;
  }

  /**
  * @return {LinkedListNode}
  */
  unshift() {
    if (this.isEmpty()) return null;

    const currentTail = this.tail;

    // There is only one node in linked list.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return currentTail;
    }

    let previousNode;
    let currentNode = this.head;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.unlink();
    this.tail = previousNode;

    return currentTail;
  }

  /**
  * @param {Object} findParams
  * @param {*} findParams.value
  * @param {function} [findParams.callback]
  * @return {LinkedListNode}
  */
  find({ value = undefined, callback = undefined }) {
    let currentNode = this.head;
    while (currentNode) {
      if (value !== undefined && value === currentNode.value) {
        return currentNode;
      }

      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
  * @return {LinkedListNode[]}
  */
  toArray() {
    const nodesArray = [];

    let currentNode = this.head;
    while (currentNode) {
      nodesArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodesArray;
  }
}

export default LinkedList;
