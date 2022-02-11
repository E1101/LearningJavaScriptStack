// Import dependencies.
import { Queue } from '../03-queue/Queue';

/**
 * Perform breadth-first search (BFS) traversal of the rootNode.
 *
 * @param {BinaryTreeNode} rootNode - The starting node to be traversed.
 * @param {callback} [visitNodeCallback] - Visiting node callback.
 */
export function breadthFirstSearch(rootNode, visitNodeCallback = () => {}) {
  // Do initial queue setup.
  // We need to add a rootNode to the queue first to start the
  // traversal process from it.
  const nodeQueue = new Queue();
  nodeQueue.enqueue(rootNode);

  // Visit all the nodes of the queue until the queue is empty.
  while (!nodeQueue.isEmpty()) {
    // Fetch the next node to visit.
    const currentNode = nodeQueue.dequeue();

    // Call the visiting node callback.
    visitNodeCallback(currentNode);

    // Add left node to the traversal queue.
    if (currentNode.left) {
      nodeQueue.enqueue(currentNode.left);
    }

    // Add right node to the traversal queue.
    if (currentNode.right) {
      nodeQueue.enqueue(currentNode.right);
    }
  }
}
