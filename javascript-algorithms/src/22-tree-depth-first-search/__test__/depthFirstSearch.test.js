import { BinaryTreeNode } from '../../06-binary-search-tree/BinaryTreeNode';
import { depthFirstSearch } from '../depthFirstSearch';

describe('depthFirstSearch', () => {
  it('should perform DFS operation on tree', () => {
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');
    const nodeF = new BinaryTreeNode('F');
    const nodeG = new BinaryTreeNode('G');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);
    nodeC.setLeft(nodeF).setRight(nodeG);

    const enterNodeCallback = jest.fn();

    // Traverse tree without callbacks first to check default ones.
    depthFirstSearch(nodeA);

    // Traverse tree with callbacks.
    depthFirstSearch(nodeA, enterNodeCallback);

    expect(enterNodeCallback).toHaveBeenCalledTimes(7);

    // Check node entering.
    expect(enterNodeCallback.mock.calls[0][0].value).toEqual('A');
    expect(enterNodeCallback.mock.calls[1][0].value).toEqual('B');
    expect(enterNodeCallback.mock.calls[2][0].value).toEqual('D');
    expect(enterNodeCallback.mock.calls[3][0].value).toEqual('E');
    expect(enterNodeCallback.mock.calls[4][0].value).toEqual('C');
    expect(enterNodeCallback.mock.calls[5][0].value).toEqual('F');
    expect(enterNodeCallback.mock.calls[6][0].value).toEqual('G');
  });

  it('should make sure that code example works', () => {
    // Create tree nodes.
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');

    // Form a binary tree out of created nodes.
    nodeA
      .setLeft(nodeB)
      .setRight(nodeC);

    nodeB
      .setLeft(nodeD)
      .setRight(nodeE);

    // Init the array that will contain all traversed nodes of th tree.
    const traversedNodes = [];

    // Create visiting node callback.
    const visitNodeCallback = (visitedNode) => {
      // Once we visit the node let's add it to the list of traversed nodes.
      traversedNodes.push(visitedNode);
    };

    // Perform depth-first tree traversal.
    depthFirstSearch(nodeA, visitNodeCallback);

    // Check that traversal happened in correct order.
    expect(traversedNodes).toEqual([
      nodeA, nodeB, nodeD, nodeE, nodeC,
    ]);
  });
});
