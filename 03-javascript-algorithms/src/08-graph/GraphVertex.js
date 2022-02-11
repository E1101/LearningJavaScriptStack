// Import dependencies.
import LinkedList from '../02-linked-list/LinkedList';

export default class GraphVertex {
  /**
   * Graph vertex constructor.
   * @param {*} value
   */
  constructor(value) {
    this.value = value;
    this.edges = new LinkedList();
  }

  /**
   * Add new edge to the vertex.
   * @param {GraphEdge} edge
   * @returns {GraphVertex}
   */
  addEdge(edge) {
    this.edges.append(edge);

    return this;
  }

  /**
   * Delete vertex edge.
   * @param {GraphEdge} edge
   */
  deleteEdge(edge) {
    this.edges.delete(edge);
  }

  /**
   * Get the list of vertex neighbors.
   * @returns {GraphVertex[]}
   */
  getNeighbors() {
    const edges = this.edges.toArray();

    /** @param {LinkedListNode} node */
    const neighborsConverter = (node) => {
      const edge = node.value;
      const neighbor = edge.startVertex === this ? edge.endVertex : edge.startVertex;

      // Add edge property to the neighbor so that consumers
      // of this method could access edge property like weight instantly.
      neighbor.edge = edge;

      return neighbor;
    };

    // Return either start or end vertex.
    // For undirected graphs it is possible that current vertex will be the end one.
    return edges.map(neighborsConverter);
  }

  /**
   * Get all vertex edges as an array.
   * @return {GraphEdge[]}
   */
  getEdges() {
    return this.edges.toArray().map(linkedListNode => linkedListNode.value);
  }

  /**
   * Check if vertex has a specific edge connected to it.
   * @param {GraphEdge} requiredEdge
   * @returns {boolean}
   */
  hasEdge(requiredEdge) {
    const edgeNode = this.edges.find({
      callback: edge => edge === requiredEdge,
    });

    return !!edgeNode;
  }

  /**
   * Check if specific vertex is a neighbor of the current vertex.
   * @param {GraphVertex} vertex
   * @returns {boolean}
   */
  hasNeighbor(vertex) {
    const edgeToNeighbor = this.edges.find({
      callback: edge => edge.startVertex === vertex || edge.endVertex === vertex,
    });

    return !!edgeToNeighbor;
  }

  /**
   * Find edge that connects current vertex to the specified vertex.
   * @param {GraphVertex} vertex
   * @returns {(GraphEdge|null)}
   */
  findEdge(vertex) {
    const edgeFinder = (edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edge = this.edges.find({ callback: edgeFinder });

    return edge ? edge.value : null;
  }

  /**
   * Get vertex string key.
   * @returns {string}
   */
  getKey() {
    return this.value;
  }

  /**
   * Delete all edges, connected to the vertex.
   * @return {GraphVertex}
   */
  deleteAllEdges() {
    this.getEdges().forEach(edge => this.deleteEdge(edge));

    return this;
  }

  /**
   * Get string representation of graph vertex.
   * @returns {string}
   */
  toString() {
    return `${this.value}`;
  }
}
