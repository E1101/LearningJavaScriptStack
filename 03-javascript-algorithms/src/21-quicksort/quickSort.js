// Import dependencies.
import Comparator from '../07-heap/comparator/Comparator';

/**
 * @param {*[]} originalArray - array to be sorted.
 * @param {function} comparatorCallback - function that compares two elements
 * @return {*[]} - sorted array
 */
export default function quickSort(originalArray, comparatorCallback = null) {
  // Let's create comparator from the comparatorCallback function.
  // Comparator object will give us common comparison methods like equal() and lessThen().
  const comparator = new Comparator(comparatorCallback);

  // Clone original array to prevent it from modification.
  // We don't do in-place sorting in this example and thus we don't want side effects.
  const array = [...originalArray];

  // If array has less than or equal to one elements then it is already sorted.
  // This is a base case for our recursion.
  if (array.length <= 1) {
    return array;
  }

  // Init left and right arrays.
  const leftArray = [];
  const rightArray = [];

  // Take the first element of array as a pivot and init the center array.
  const pivotElement = array.shift();
  const centerArray = [pivotElement];

  // Split all array elements between left, center and right arrays.
  // Since we're extracting elements out of array we may just check array length to stop the loop.
  while (array.length) {
    // Extract first element out from the unsorted array.
    const currentElement = array.shift();

    // Compare extracted element to the pivot to decide what sub-array
    // it belongs to (left, center or right).
    if (comparator.equal(currentElement, pivotElement)) {
      centerArray.push(currentElement);
    } else if (comparator.lessThan(currentElement, pivotElement)) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  // Sort left and right arrays recursively.
  const leftArraySorted = quickSort(leftArray, comparatorCallback);
  const rightArraySorted = quickSort(rightArray, comparatorCallback);

  // Let's now join sorted left array with center array and with sorted right array.
  return leftArraySorted.concat(centerArray, rightArraySorted);
}
