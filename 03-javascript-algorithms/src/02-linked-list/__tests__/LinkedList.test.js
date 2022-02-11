import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create an empty linked list on construct', () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBe(true);
    expect(linkedList.toArray()).toEqual([]);
  });

  it('makes no different with using append or prepend for adding first node', () => {
    const prependedNode = new LinkedList();
    prependedNode.prepend(1);
    expect(prependedNode.toArray()).toEqual([1]);

    const appendedNode = new LinkedList();
    appendedNode.prepend(1);
    expect(appendedNode.toArray()).toEqual([1]);
  });

  it('should prepend node to link list', () => {
    const linkedList = new LinkedList();
    linkedList.prepend(3);
    linkedList.prepend(2);
    linkedList.prepend(1);

    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  it('should append node to link list', () => {
    const linkedList = new LinkedList();
    linkedList
      .append(1)
      .append(2)
      .append(3);

    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  it('also works with combination of append/prepend node to link list', () => {
    const linkedList = new LinkedList();
    linkedList.append(2)
      .prepend(1)
      .append(3);

    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  it('should unshift linked list tail', () => {
    const linkedList = new LinkedList();
    expect(linkedList.unshift()).toBeNull();

    linkedList.append(1);
    const deletedNode1 = linkedList.unshift();
    expect(deletedNode1).toBeDefined();
    expect(deletedNode1.value).toBe(1);
    expect(linkedList.toArray()).toEqual([]);

    linkedList.append(3);
    linkedList.prepend(2);
    const deletedNode2 = linkedList.unshift();
    expect(deletedNode2).toBeDefined();
    expect(deletedNode2.value).toBe(3);
    expect(linkedList.toArray()).toEqual([2]);

    const deletedNode3 = linkedList.unshift();
    expect(deletedNode3.value).toBe(2);
    expect(linkedList.toArray()).toEqual([]);
  });

  it('should pop linked list head', () => {
    const linkedList = new LinkedList();
    expect(linkedList.pop()).toBeNull();

    linkedList.append(1);
    const deletedNode1 = linkedList.pop();
    expect(deletedNode1).toBeDefined();
    expect(deletedNode1.value).toBe(1);
    expect(linkedList.toArray()).toEqual([]);

    linkedList.append(3);
    linkedList.prepend(2);
    const deletedNode2 = linkedList.pop();
    expect(deletedNode2).toBeDefined();
    expect(deletedNode2.value).toBe(2);
    expect(linkedList.toArray()).toEqual([3]);

    const deletedNode3 = linkedList.pop();
    expect(deletedNode3.value).toBe(3);
    expect(linkedList.toArray()).toEqual([]);
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.unset(value => value === 5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    const deletedNode = linkedList.unset(value => value === 3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.toArray()).toEqual([1, 1, 2, 3, 4, 5]);

    linkedList.unset(value => value === 3);
    expect(linkedList.toArray()).toEqual([1, 1, 2, 4, 5]);

    linkedList.unset(value => value === 1);
    expect(linkedList.toArray()).toEqual([1, 2, 4, 5]);

    linkedList.unset(value => value === 5);
    expect(linkedList.toArray()).toEqual([1, 2, 4]);

    linkedList.unset(value => value === 4);
    expect(linkedList.toArray()).toEqual([1, 2]);

    linkedList.unset(value => value === 2);
    expect(linkedList.toArray()).toEqual([1]);

    linkedList.unset(value => value === 1);
    expect(linkedList.toArray()).toEqual([]);
  });

  it('should find a node by value', () => {
    const linkedList = new LinkedList();
    expect(linkedList.find({ value: 5 })).toBeNull();

    linkedList.append(1);
    expect(linkedList.find({ value: 1 })).toBeDefined();

    linkedList
      .append(2)
      .append(3);

    const node = linkedList.find({ value: 2 });
    expect(node.value).toBe(2);

    expect(linkedList.find({ value: 5 })).toBeNull();
  });

  it('should find a node by callback', () => {
    const linkedList = new LinkedList();
    linkedList
      .append({ value: 1, key: 'test1' })
      .append({ value: 2, key: 'test2' })
      .append({ value: 3, key: 'test3' });

    const node = linkedList.find({ callback: value => value.key === 'test2' });
    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.key).toBe('test2');

    const nodeNotExists = linkedList.find({ callback: value => value.key === 'test5' });
    expect(nodeNotExists).toBeNull();
  });
});
