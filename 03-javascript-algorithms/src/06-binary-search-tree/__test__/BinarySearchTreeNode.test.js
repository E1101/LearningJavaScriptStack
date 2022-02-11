import BinarySearchTreeNode from '../BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
  it('should create node', () => {
    const node = new BinarySearchTreeNode();

    expect(node).toBeDefined();

    expect(node.value).toBeNull();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
    expect(node.parent).toBeNull();
  });

  it('should accept left and right nodes properly', () => {
    const rootNode = new BinarySearchTreeNode(2);
    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.value).toBe(2);
    expect(rootNode.left.value).toBe(1);
    expect(rootNode.right.value).toBe(3);

    expect(rootNode.left.parent).toBe(rootNode);
    expect(rootNode.right.parent).toBe(rootNode);
  });

  it('should detach existing child nodes on replacement', () => {
    const rootNode = new BinarySearchTreeNode(2);
    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(leftNode.parent).toBe(rootNode);
    expect(rightNode.parent).toBe(rootNode);

    // check previous nodes will be detached
    rootNode.setLeft(new BinarySearchTreeNode(0));
    rootNode.setRight(new BinarySearchTreeNode(4));

    expect(leftNode.parent).toBeNull();
    expect(rightNode.parent).toBeNull();
  });

  it('throw error when left node value has higher value than parent', () => {
    const rootNode = new BinarySearchTreeNode(2);
    const node = new BinarySearchTreeNode(3);

    expect(() => rootNode.setLeft(node)).toThrow('Left node should have a value less than of parent node');
  });

  it('throw error when right node value has lower value than parent', () => {
    const rootNode = new BinarySearchTreeNode(2);
    const node = new BinarySearchTreeNode(1);

    expect(() => rootNode.setRight(node)).toThrow('Right node should have a value more than of parent node');
  });

  it('should insert values properly aligned to left and right', () => {
    const rootNode = new BinarySearchTreeNode();

    rootNode.insert(2);
    expect(rootNode.value).toBe(2);
    expect(rootNode.left).toBeNull();
    expect(rootNode.right).toBeNull();

    rootNode.insert(1);
    rootNode.insert(3);

    expect(rootNode.left).toBeDefined();
    expect(rootNode.left.value).toBe(1);
    expect(rootNode.right).toBeDefined();
    expect(rootNode.right.value).toBe(3);
  });

  it('should find node', () => {
    const node = new BinarySearchTreeNode(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.find(6)).toBeNull();
    expect(node.find(5)).not.toBeNull();
    expect(node.find(5).value).toBe(5);
  });

  it('should find min node', () => {
    const node = new BinarySearchTreeNode(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.findMin()).not.toBeNull();
    expect(node.findMin().value).toBe(1);
  });

  it('should find max node', () => {
    const node = new BinarySearchTreeNode(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.findMax()).not.toBeNull();
    expect(node.findMax().value).toBe(40);
  });

  it('should detach leaf node properly', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(300);
    bstRootNode.insert(100);

    const parentNodeLeaves = bstRootNode.insert(200);
    const leafNodeRight = bstRootNode.insert(250);
    const leafNodeLeft = bstRootNode.insert(150);

    expect(parentNodeLeaves.right).toBe(leafNodeRight);
    expect(parentNodeLeaves.left).toBe(leafNodeLeft);

    leafNodeLeft.detach();
    expect(leafNodeLeft.parent).toBeNull();
    expect(parentNodeLeaves.left).toBeNull();
    expect(parentNodeLeaves.right).toBeDefined();
  });

  it('should set value of node to undefined when root is only node in tree', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(300);
    expect(bstRootNode.value).toBe(300);
    expect(bstRootNode.left).toBeNull();
    expect(bstRootNode.right).toBeNull();

    bstRootNode.detach();

    expect(bstRootNode.value).toBeUndefined();
  });

  it('should remove leaf nodes', () => {
    const bstRootNode = new BinarySearchTreeNode();

    bstRootNode.insert(300);
    bstRootNode.insert(100);

    const parentNodeLeaves = bstRootNode.insert(200);
    const leafNodeRight = bstRootNode.insert(250);
    const leafNodeLeft = bstRootNode.insert(150);

    bstRootNode.remove(150);
    expect(leafNodeLeft.parent).toBeNull();
    expect(parentNodeLeaves.left).toBeNull();
  });
});
