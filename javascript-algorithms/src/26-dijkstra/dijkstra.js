import { PriorityQueue } from '../07-priority-queue/PriorityQueue';

/**
 * @typedef {Object} ShortestPaths
 * @property {Object} distances - shortest distances to all vertices
 * @property {Object} previousVertices - shortest paths to all vertices.
 */

/**
 * Implementation of Dijkstra algorithm of finding the shortest paths to graph nodes.
 * @param {Graph} graph - graph we're going to traverse.
 * @param {GraphVertex} startVertex - traversal start vertex.
 * @return {ShortestPaths}
 */
export default function dijkstra(graph, startVertex) {
  // Init helper variables that we will need for Dijkstra algorithm.
  const distances = {};
  const visitedVertices = {};
  const previousVertices = {};
  const queue = new PriorityQueue();

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except the start one.
  graph.getAllVertices().forEach((vertex) => {
    distances[vertex.getKey()] = Infinity;
    previousVertices[vertex.getKey()] = null;
  });

  // We are already at the startVertex so the distance to it is zero.
  distances[startVertex.getKey()] = 0;

  // Init vertices queue.
  queue.add(startVertex, distances[startVertex.getKey()]);

  // Iterate over the priority queue of vertices until it is empty.
  while (!queue.isEmpty()) {
    // Fetch next closest vertex.
    const currentVertex = queue.poll();

    // Iterate over every unvisited neighbor of the current vertex.
    currentVertex.getNeighbors().forEach((neighbor) => {
      if (visitedVertices[neighbor.getKey()]) {
        return;
      }

      const edgeWight = neighbor.edge.weight;
      const distanceToNeighborFromCurrent = distances[currentVertex.getKey()] + edgeWight;
      const existingDistanceToNeighbor = distances[neighbor.getKey()];

      // If we've found shorter path to the neighbor - update it.
      if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
        distances[neighbor.getKey()] = distanceToNeighborFromCurrent;

        // Change priority of the neighbor in a queue since it might have became closer.
        if (queue.has(neighbor)) {
          queue.changePriority(neighbor, distances[neighbor.getKey()]);
        }

        // Remember previous closest vertex.
        previousVertices[neighbor.getKey()] = currentVertex;
      }

      // Add neighbor to the queue for further visiting.
      if (!queue.has(neighbor)) {
        queue.add(neighbor, distances[neighbor.getKey()]);
      }
    });

    // Add current vertex to visited ones to avoid visiting it again later.
    visitedVertices[currentVertex.getKey()] = true;
  }

  // Return the set of the shortest distances and paths to all vertices.
  return { distances, previousVertices };
}
