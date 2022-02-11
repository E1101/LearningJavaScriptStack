import BinarySearchTreeNode from '../BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
  it('should traverse node', () => {
    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);
    const rootNode = new BinarySearchTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    expect(rootNode.toString()).toBe('1,2,3');
  });

  it('should be possible to copy node', () => {
    const root = new BinarySearchTreeNode('root');
    const left = new BinarySearchTreeNode('left');
    const right = new BinarySearchTreeNode('right');

    root
      .setLeft(left)
      .setRight(right);

    expect(root.toString()).toBe('left,root,right');

    const newRoot = new BinarySearchTreeNode('new_root');
    const newLeft = new BinarySearchTreeNode('new_left');
    const newRight = new BinarySearchTreeNode('new_right');

    newRoot
      .setLeft(newLeft)
      .setRight(newRight);

    expect(newRoot.toString()).toBe('new_left,new_root,new_right');

    BinarySearchTreeNode.copyNode(root, newRoot);

    expect(root.toString()).toBe('left,root,right');
    expect(newRoot.toString()).toBe('left,root,right');
  });

  it('should insert nodes in correct order', () => {
    const bstNode = new BinarySearchTreeNode(2);
    const insertedNode1 = bstNode.insert(1);

    expect(insertedNode1.value).toBe(1);
    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);

    const insertedNode2 = bstNode.insert(3);

    expect(insertedNode2.value).toBe(3);
    expect(bstNode.toString()).toBe('1,2,3');
    expect(bstNode.contains(3)).toBe(true);
    expect(bstNode.contains(4)).toBe(false);

    bstNode.insert(7);

    expect(bstNode.toString()).toBe('1,2,3,7');
    expect(bstNode.contains(7)).toBe(true);
    expect(bstNode.contains(8)).toBe(false);

    bstNode.insert(4);

    expect(bstNode.toString()).toBe('1,2,3,4,7');
    expect(bstNode.contains(4)).toBe(true);
    expect(bstNode.contains(8)).toBe(false);

    bstNode.insert(6);

    expect(bstNode.toString()).toBe('1,2,3,4,6,7');
    expect(bstNode.contains(6)).toBe(true);
    expect(bstNode.contains(8)).toBe(false);
  });

  it('should not insert duplicates', () => {
    const bstNode = new BinarySearchTreeNode(2);
    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);

    bstNode.insert(1);

    expect(bstNode.toString()).toBe('1,2');
    expect(bstNode.contains(1)).toBe(true);
    expect(bstNode.contains(3)).toBe(false);
  });






  it('should remove nodes with one child', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);

    expect(bstRootNode.toString()).toBe('5,10,20,30');

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('5,10,30');

    bstRootNode.insert(1);
    expect(bstRootNode.toString()).toBe('1,5,10,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('1,10,30');
  });

  it('should remove nodes with two children', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);
    bstRootNode.insert(15);
    bstRootNode.insert(25);

    expect(bstRootNode.toString()).toBe('5,10,15,20,25,30');
    expect(bstRootNode.find(20).left.value).toBe(15);
    expect(bstRootNode.find(20).right.value).toBe(30);

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).toBe('5,10,15,25,30');

    bstRootNode.remove(15);
    expect(bstRootNode.toString()).toBe('5,10,25,30');

    bstRootNode.remove(10);
    expect(bstRootNode.toString()).toBe('5,25,30');
    expect(bstRootNode.value).toBe(25);

    bstRootNode.remove(25);
    expect(bstRootNode.toString()).toBe('5,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).toBe('30');
  });

  it('should remove node with no parent', () => {
    const bstRootNode = new BinarySearchTreeNode();
    expect(bstRootNode.toString()).toBe('');

    bstRootNode.insert(1);
    bstRootNode.insert(2);
    expect(bstRootNode.toString()).toBe('1,2');

    bstRootNode.remove(1);
    expect(bstRootNode.toString()).toBe('2');

    bstRootNode.remove(2);
    expect(bstRootNode.toString()).toBe('');
  });

  it('should throw error when trying to remove not existing node', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(10);
    bstRootNode.insert(20);

    function removeNotExistingElementFromTree() {
      bstRootNode.remove(30);
    }

    expect(removeNotExistingElementFromTree).toThrow();
  });

  it('should abandon removed node', () => {
    const rootNode = new BinarySearchTreeNode('foo');
    rootNode.insert('bar');
    const childNode = rootNode.find('bar');
    rootNode.remove('bar');

    expect(childNode.parent).toBeNull();
  });
});
