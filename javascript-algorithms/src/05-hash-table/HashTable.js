import LinkedList from '../02-linked-list/LinkedList';
import { hash } from './hash';

const defaultBucketsNumber = 32;

export class HashTable {
  /**
   * @param {number} bucketsNumber - Number of buckets that will hold hash table data.
   */
  constructor(bucketsNumber = defaultBucketsNumber) {
    this.buckets = new Array(bucketsNumber)
      .fill(null); // fill it with null values so we can loop over array
  }

  /**
   * ADD or UPDATE the value by its key.
   *
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const bucketLinkedList = this.getBucketForKey(key);
    // Perform 'find by key' operation in linked list.
    const node = bucketLinkedList.find({
      callback: listNode => listNode.key === key,
    });

    // Check the value with specified key is already exists in linked list.
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      // Update value of existing linked list node.
      node.value.value = value;
    }
  }

  /**
   * GET the value by its key.s
   *
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const bucketLinkedList = this.getBucketForKey(key);
    // Perform 'find by key' operation in linked list.
    const node = bucketLinkedList.find({
      callback: listNode => listNode.key === key,
    });

    // Check the value with specified key is already exists in linked list.
    return node ? node.value.value : undefined;
  }

  /**
   * DELETE the value by its key.
   *
   * @param {string} key
   * @return {boolean}
   */
  delete(key) {
    const bucketLinkedList = this.getBucketForKey(key);
    // Perform 'find by key' operation in linked list.
    const node = bucketLinkedList.find({
      callback: listNode => listNode.key === key,
    });

    if (!node) return false;

    bucketLinkedList.unset(nodeValue => nodeValue === node.value);

    return true;
  }

  /**
   * @private
   * Prepare Bucket With Ensuring LinkedList object
   *
   * @param {string} key
   * @return {LinkedList}
   */
  getBucketForKey(key) {
    const index = hash(key, this.buckets.length);
    if (this.buckets[index] === null) {
      this.buckets[index] = new LinkedList();
    }

    return this.buckets[index];
  }
}
