// Import dependencies.
import { Queue } from '../03-queue/Queue';

/**
 *  Traverse the graph in breadth-first manner.
 *
 * @param {Graph} graph - Graph that is going to be traversed.
 * @param {GraphVertex} startVertex - Vertex that we will use as a starting point.
 * @param {function} enterVertexCallback - Callback that will be called on every vertex visit.
 */
export function breadthFirstSearch(graph, startVertex, enterVertexCallback) {
  // Init vertex queue. Whenever we will meet a new vertex it will be
  // added to the Queue for further exploration.
  const vertexQueue = new Queue();

  // Add startVertex to the queue since we're going to visit it first.
  vertexQueue.enqueue(startVertex);

  // In order to prevent the visiting of the same vertex twice
  // we need to memorize all visited vertices.
  const visitedVertices = {};

  // Since we're going to visit startVertex first let's add it to the visited list.
  visitedVertices[startVertex.getKey()] = true;

  // Traverse all vertices from the queue while it is not empty.
  while (!vertexQueue.isEmpty()) {
    // Get the next vertex from the queue.
    const currentVertex = vertexQueue.dequeue();

    // Call the callback to notify subscribers about the entering a new vertex.
    enterVertexCallback(currentVertex);

    // Add all neighbors to the queue for future traversals.
    currentVertex.getNeighbors().forEach((nextVertex) => {
      if (!visitedVertices[nextVertex.getKey()]) {
        // Memorize current neighbor to avoid visiting it again in the feature.
        visitedVertices[nextVertex.getKey()] = true;

        // Add nextVertex to the queue for further visits.
        vertexQueue.enqueue(nextVertex);
      }
    });
  }
}
