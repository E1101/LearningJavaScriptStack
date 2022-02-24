import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create list node with object as a value', () => {
    const valueAsObject = { value: 1, key: 'test' };
    const node = new LinkedListNode(valueAsObject);

    expect(node.value.key).toBe('test');
    expect(node.value.value).toBe(1);
  });

  it('should link nodes together through constructor', () => {
    const nodeTwo = new LinkedListNode(2);
    const nodeOne = new LinkedListNode(1, nodeTwo);

    expect(nodeOne.next).toBeDefined();
    expect(nodeTwo.next).toBeNull();

    expect(nodeOne.value).toBe(1);
    expect(nodeTwo.value).toBe(2);
    expect(nodeOne.next.value).toBe(2);
  });

  it('should link constructed nodes together', () => {
    const nodeOne = new LinkedListNode(1);
    const nodeTwo = new LinkedListNode(2);

    nodeOne.link(nodeTwo);

    expect(nodeOne.next).toBeDefined();
    expect(nodeTwo.next).toBeNull();

    expect(nodeOne.value).toBe(1);
    expect(nodeTwo.value).toBe(2);
    expect(nodeOne.next.value).toBe(2);
  });

  it('should be able to unlink nodes', () => {
    const nodeTwo = new LinkedListNode(2);
    const nodeOne = new LinkedListNode(1, nodeTwo);

    nodeOne.unlink();

    expect(nodeOne.next).toBeNull();
    expect(nodeTwo.next).toBeNull();
  });
});
