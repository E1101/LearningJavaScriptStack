export default class GraphEdge {
  /**
   * GraphEdge constructor.
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @param {number} [weight=1]
   */
  constructor(startVertex, endVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  /**
   * Get string representation of the edge key.
   * @return {string}
   */
  getKey() {
    const startVertexKey = this.startVertex.getKey();
    const endVertexKey = this.endVertex.getKey();

    return `${startVertexKey}_${endVertexKey}`;
  }

  /**
   * Convert edge to string.
   * @return {string}
   */
  toString() {
    return this.getKey();
  }
}
