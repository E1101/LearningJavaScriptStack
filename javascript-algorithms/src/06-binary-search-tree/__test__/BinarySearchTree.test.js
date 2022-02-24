import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeDefined();
    expect(bst.root.value).toBeNull();
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('should insert values', () => {
    const bst = new BinarySearchTree();

    const insertedNode1 = bst.insert(10, 'anything here');
    const insertedNode2 = bst.insert(20, 'any data here');
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');
    expect(insertedNode1.value).toBe(10);
    expect(insertedNode1.data).toBe('anything here');
    expect(insertedNode2.value).toBe(20);
    expect(insertedNode2.data).toBe('any data here');
  });

  it('should check if value exists', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.contains(20)).toBe(true);
    expect(bst.contains(40)).toBe(false);
  });

  it('should find the node value', () => {
    const bst = new BinarySearchTree();

    bst.insert(10, 'value 1');
    bst.insert(20, 'value 2');
    bst.insert(5);

    expect(bst.find(30)).toBe(null);
    expect(bst.find(20).value).toBe(20);
    expect(bst.find(20).data).toBe('value 2');
    expect(bst.find(10).data).toBe('value 1');
  });

  it('should find minumum and maximum values in a tree', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.findMin().value).toBe(5);
    expect(bst.findMax().value).toBe(20);

    bst.insert(0);
    bst.insert(30);

    expect(bst.findMin().value).toBe(0);
    expect(bst.findMax().value).toBe(30);
  });

  it('should remove nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');

    const removed1 = bst.remove(5);
    expect(bst.toString()).toBe('10,20');
    expect(removed1).toBe(true);

    const removed2 = bst.remove(20);
    expect(bst.toString()).toBe('10');
    expect(removed2).toBe(true);
  });

  it('should be traversed to sorted array', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);

    expect(bst.toString()).toBe('-20,-10,6,10,20,25');

    bst.insert(4);

    expect(bst.toString()).toBe('-20,-10,4,6,10,20,25');
  });

  it('should have workable code example', () => {
    // Create binary search tree instance.
    const bstCollection = new BinarySearchTree();

    // Add shopping items to our binary search tree collection.
    // We will use items price as a keys.
    bstCollection.insert(1220, { title: 'Phone' });
    bstCollection.insert(3455, { title: 'TV' });
    bstCollection.insert(8200, { title: 'Notebook' });
    bstCollection.insert(120, { title: 'Remote Control' });

    // Let's find the cheapest and most expensive items so far.
    expect(bstCollection.findMin().data).toEqual({ title: 'Remote Control' });
    expect(bstCollection.findMax().data).toEqual({ title: 'Notebook' });

    // Let's fins the item with the price 8200.
    expect(bstCollection.find(3455).data).toEqual({ title: 'TV' });

    // Remove the item from collection by price.
    bstCollection.remove(120);
    // Check what is the cheapest item at the moment.
    expect(bstCollection.findMin().data).toEqual({ title: 'Phone' });
  });
});
