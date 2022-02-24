// Import dependencies.
import Graph from '../08-graph/Graph';
import GraphVertex from '../08-graph/GraphVertex';
import GraphEdge from '../08-graph/GraphEdge';
import { breadthFirstSearch } from './breadthFirstSearch';

// Create a demo-version of our overly-simplified social network.
const socialNetwork = new Graph();

// Let's register several users in our network.
const bill = new GraphVertex('Bill');
const alice = new GraphVertex('Alice');
const john = new GraphVertex('John');
const kate = new GraphVertex('Kate');
const ann = new GraphVertex('Ann');
const tom = new GraphVertex('Tom');
const sam = new GraphVertex('Sam');

// Now let's establish friendship connections between the users of our network.
socialNetwork
  .addEdge(new GraphEdge(bill, alice))
  .addEdge(new GraphEdge(bill, john))
  .addEdge(new GraphEdge(bill, kate))
  .addEdge(new GraphEdge(alice, ann))
  .addEdge(new GraphEdge(ann, sam))
  .addEdge(new GraphEdge(john, ann))
  .addEdge(new GraphEdge(kate, tom));

// Now let's traverse the network in breadth-first manner staring from Bill
// and add all users we will encounter to the userVisits array.
const userVisits = [];
breadthFirstSearch(socialNetwork, bill, (user) => {
  userVisits.push(user);
});

// Now let's see in what order the users have been traversed.
// eslint-disable-next-line no-console
console.log(userVisits);
/*
  The output will be:
  [bill, alice, john, kate, ann, tom, sam]
*/
