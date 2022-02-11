// Import dependencies.
import Graph from './Graph';
import GraphVertex from './GraphVertex';
import GraphEdge from './GraphEdge';

// Create a network.
const network = new Graph();

// Create users.
const bill = new GraphVertex('Bill');
const mary = new GraphVertex('Mary');
const john = new GraphVertex('John');
const jane = new GraphVertex('Jane');

// Register users in our network.
network
  .addVertex(bill)
  .addVertex(mary)
  .addVertex(john)
  .addVertex(jane);

// Check if users have been registered successfully.
network.getVertexByKey('Bill'); // -> bill
network.getVertexByKey('Mary'); // -> mary

// Establish friendship connections.
network
  .addEdge(new GraphEdge(bill, mary))
  .addEdge(new GraphEdge(john, jane))
  .addEdge(new GraphEdge(jane, mary));

// Check if specific users are friends.
network.findEdge(bill, mary); // -> GraphEdge entity
network.findEdge(john, jane); // -> GraphEdge entity
network.findEdge(bill, john); // -> null

// Get all friends of specific user.
// eslint-disable-next-line no-unused-expressions
mary.getNeighbors().length; // -> 2
mary.getNeighbors(); // -> [bill, jane]
