import { Queue } from '../Queue';

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toArray()).toEqual([]);
  });

  it('should enqueue numbers to queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toArray()).toEqual([1, 2]);
  });

  it('should enqueue strings to queue', () => {
    const queue = new Queue();

    queue.enqueue('message_1');
    expect(queue.peek()).toBe('message_1');
    expect(queue.toArray()).toEqual(['message_1']);

    queue.enqueue('message_2');
    expect(queue.peek()).toBe('message_1');
    expect(queue.toArray()).toEqual(['message_1', 'message_2']);

    expect(queue.dequeue()).toBe('message_1');
    expect(queue.dequeue()).toBe('message_2');

    expect(queue.isEmpty()).toBe(true);
  });

  it('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue();

    queue.enqueue({ value: 'test1', key: 'key1' });
    queue.enqueue({ value: 'test2', key: 'key2' });

    expect(queue.toArray()).toEqual([
      { value: 'test1', key: 'key1' },
      { value: 'test2', key: 'key2' },
    ]);

    expect(queue.dequeue().value).toBe('test1');
    expect(queue.dequeue().value).toBe('test2');
  });

  it('should peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeNull();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it('should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it('should dequeue from queue in FIFO order', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });
});
