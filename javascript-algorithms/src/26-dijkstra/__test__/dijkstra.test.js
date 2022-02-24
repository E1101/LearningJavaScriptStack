import Graph from '../../08-graph/Graph';
import GraphVertex from '../../08-graph/GraphVertex';
import GraphEdge from '../../08-graph/GraphEdge';
import dijkstra from '../dijkstra';

describe('dijkstra', () => {
  it('should find minimum paths to all vertices for undirected graph', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');
    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');

    const edgeAB = new GraphEdge(vertexA, vertexB, 4);
    const edgeAE = new GraphEdge(vertexA, vertexE, 7);
    const edgeAC = new GraphEdge(vertexA, vertexC, 3);
    const edgeBC = new GraphEdge(vertexB, vertexC, 6);
    const edgeBD = new GraphEdge(vertexB, vertexD, 5);
    const edgeEC = new GraphEdge(vertexE, vertexC, 8);
    const edgeED = new GraphEdge(vertexE, vertexD, 2);
    const edgeDC = new GraphEdge(vertexD, vertexC, 11);
    const edgeDG = new GraphEdge(vertexD, vertexG, 10);
    const edgeDF = new GraphEdge(vertexD, vertexF, 2);
    const edgeFG = new GraphEdge(vertexF, vertexG, 3);
    const edgeEG = new GraphEdge(vertexE, vertexG, 5);

    const graph = new Graph();
    graph
      .addVertex(vertexH)
      .addEdge(edgeAB)
      .addEdge(edgeAE)
      .addEdge(edgeAC)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeEC)
      .addEdge(edgeED)
      .addEdge(edgeDC)
      .addEdge(edgeDG)
      .addEdge(edgeDF)
      .addEdge(edgeFG)
      .addEdge(edgeEG);

    const { distances, previousVertices } = dijkstra(graph, vertexA);

    expect(distances).toEqual({
      H: Infinity,
      A: 0,
      B: 4,
      E: 7,
      C: 3,
      D: 9,
      G: 12,
      F: 11,
    });

    expect(previousVertices.F.getKey()).toBe('D');
    expect(previousVertices.D.getKey()).toBe('B');
    expect(previousVertices.B.getKey()).toBe('A');
    expect(previousVertices.G.getKey()).toBe('E');
    expect(previousVertices.C.getKey()).toBe('A');
    expect(previousVertices.A).toBeNull();
    expect(previousVertices.H).toBeNull();
  });

  it('should find minimum paths to all vertices for directed graph with negative edge weights', () => {
    const vertexS = new GraphVertex('S');
    const vertexE = new GraphVertex('E');
    const vertexA = new GraphVertex('A');
    const vertexD = new GraphVertex('D');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexH = new GraphVertex('H');

    const edgeSE = new GraphEdge(vertexS, vertexE, 8);
    const edgeSA = new GraphEdge(vertexS, vertexA, 10);
    const edgeED = new GraphEdge(vertexE, vertexD, 1);
    const edgeDA = new GraphEdge(vertexD, vertexA, -4);
    const edgeDC = new GraphEdge(vertexD, vertexC, -1);
    const edgeAC = new GraphEdge(vertexA, vertexC, 2);
    const edgeCB = new GraphEdge(vertexC, vertexB, -2);
    const edgeBA = new GraphEdge(vertexB, vertexA, 1);

    const graph = new Graph(true);
    graph
      .addVertex(vertexH)
      .addEdge(edgeSE)
      .addEdge(edgeSA)
      .addEdge(edgeED)
      .addEdge(edgeDA)
      .addEdge(edgeDC)
      .addEdge(edgeAC)
      .addEdge(edgeCB)
      .addEdge(edgeBA);

    const { distances, previousVertices } = dijkstra(graph, vertexS);

    expect(distances).toEqual({
      H: Infinity,
      S: 0,
      A: 5,
      B: 5,
      C: 7,
      D: 9,
      E: 8,
    });

    expect(previousVertices.H).toBeNull();
    expect(previousVertices.S).toBeNull();
    expect(previousVertices.B.getKey()).toBe('C');
    expect(previousVertices.C.getKey()).toBe('A');
    expect(previousVertices.A.getKey()).toBe('D');
    expect(previousVertices.D.getKey()).toBe('E');
  });

  it('should make sure that code example works', () => {
    // Let's create the spots on our imaginary map.
    const spotHome = new GraphVertex('Home');
    const spotA = new GraphVertex('A');
    const spotB = new GraphVertex('B');
    const spotC = new GraphVertex('C');
    const spotD = new GraphVertex('D');
    const spotE = new GraphVertex('E');
    const spotOffice = new GraphVertex('Office');

    // Now let's connect those spots with the roads of certain length.
    const roadHomeA = new GraphEdge(spotHome, spotA, 5);
    const roadHomeD = new GraphEdge(spotHome, spotD, 8);
    const roadAB = new GraphEdge(spotA, spotB, 9);
    const roadAC = new GraphEdge(spotA, spotC, 3);
    const roadCB = new GraphEdge(spotC, spotB, 5);
    const roadDC = new GraphEdge(spotD, spotC, 4);
    const roadCE = new GraphEdge(spotC, spotE, 2);
    const roadDE = new GraphEdge(spotD, spotE, 6);
    const roadOfficeB = new GraphEdge(spotOffice, spotB, 7);
    const roadOfficeE = new GraphEdge(spotOffice, spotE, 4);

    // We will create two way roads that means that our graph will be undirected.
    const isDirected = false;
    const graph = new Graph(isDirected);

    // Now let's add the spots and roads we've just created to the graph.
    // It is like putting all the information about the spots and roads on the map.
    // Remember that we don't need to add both vertices and edges between them.
    // We may add only edges and vertices will be added to the graph automatically
    // (for more details on Graph implementation please refer to Graphs chapter).
    graph
      .addEdge(roadHomeA)
      .addEdge(roadHomeD)
      .addEdge(roadAB)
      .addEdge(roadAC)
      .addEdge(roadCB)
      .addEdge(roadDC)
      .addEdge(roadCE)
      .addEdge(roadDE)
      .addEdge(roadOfficeB)
      .addEdge(roadOfficeE);

    // Now we're ready to launch the Dijkstra algorithm and figure out what are the shortest
    // paths from home to  all other nodes and to the office in particular.
    const { distances, previousVertices } = dijkstra(graph, spotHome);

    expect(distances).toEqual({
      Home: 0,
      A: 5,
      B: 13,
      C: 8,
      D: 8,
      E: 10,
      Office: 14,
    });

    expect(previousVertices.Office.getKey()).toEqual('E');
    expect(previousVertices.E.getKey()).toEqual('C');
    expect(previousVertices.C.getKey()).toEqual('A');
    expect(previousVertices.A.getKey()).toEqual('Home');
  });
});
