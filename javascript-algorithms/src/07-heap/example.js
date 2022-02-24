// Import MinHeap class.

// Create min-heap instance.
import { MinHeap } from './MinHeap.js';

const minHeap = new MinHeap();

minHeap.add(80);
minHeap.add(60);
minHeap.add(10);
minHeap.add(90);
minHeap.add(70);

console.log(minHeap.heapContainer.toString());

minHeap.remove(70);

console.log(minHeap.heapContainer.toString());
/*
minHeap.add(30);
minHeap.add(90);
minHeap.add(60);
minHeap.add(50);
minHeap.add(10);

console.log(minHeap.heapContainer.toString());
*/
