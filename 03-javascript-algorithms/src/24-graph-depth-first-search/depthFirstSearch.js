/**
 * Traverse the graph in depth-first manner.
 *
 * @param {Graph} graph - Graph that is going to be traversed.
 * @param {GraphVertex} startVertex - Vertex that we will use as a starting point.
 * @param {function} enterVertexCallback - Callback that will be called on every vertex visit.
 */
export function depthFirstSearch(graph, startVertex, enterVertexCallback) {
  // In order to prevent the visiting of the same vertex twice
  // we need to memorize all visited vertices.
  const visitedVertices = {};

  // Since we're going to visit startVertex first let's add it to the visited list.
  visitedVertices[startVertex.getKey()] = true;

  /**
   * Recursive implementation of depth-first search.
   *
   * @param {GraphVertex} currentVertex - Graph vertex that is currently being traversed.
   */
  const depthFirstSearchRecursive = (currentVertex) => {
    // Call the callback to notify subscribers about the entering a new vertex.
    enterVertexCallback(currentVertex);

    // Iterate over every neighbor of currently visited vertex.
    currentVertex
      .getNeighbors()
      .forEach((nextVertex) => {
        // In case if the neighbor vertex was not visited before let's visit it.
        if (!visitedVertices[nextVertex.getKey()]) {
          // Memorize current neighbor to avoid visiting it again in the feature.
          visitedVertices[nextVertex.getKey()] = true;
          // Visit the next neighbor vertex.
          depthFirstSearchRecursive(nextVertex);
        }
      });
  };

  // Start graph traversal by calling recursive function.
  depthFirstSearchRecursive(startVertex);
}
