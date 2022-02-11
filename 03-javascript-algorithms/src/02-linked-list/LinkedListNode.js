class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  link(nextNode) {
    this.next = nextNode;
  }

  unlink() {
    this.next = null;
  }
}

export default LinkedListNode;
