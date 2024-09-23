/* Queues:
    A queue follows the First In, First Out (FIFO) principle.
     It’s like a line of people where the first person in line is the first to be served. */

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10


// Example 2 :

{

    class Queue {
        constructor() {
            this.elements = {};
            this.head = 0;
            this.tail = 0;
        }

        // Adds an element to the end of the queue
        enqueue(element) {
            this.elements[this.tail] = element;
            this.tail++;
        }

        // Removes and returns the first element of the queue
        dequeue() {
            if (this.head === this.tail) return "Underflow";
            const item = this.elements[this.head];
            delete this.elements[this.head];
            this.head++;
            return item;
        }

        // Returns the first element of the queue without removing it
        peek() {
            if (this.head === this.tail) return "Underflow";
            return this.elements[this.head];
        }

        // Checks if the queue is empty
        isEmpty() {
            return this.head === this.tail;
        }

        // Returns the size of the queue
        size() {
            return this.tail - this.head;
        }

        // Clears the queue
        clear() {
            this.elements = {};
            this.head = 0;
            this.tail = 0;
        }
    }

    // Example usage:
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    console.log(queue.peek()); // Output: 10
    console.log(queue.size()); // Output: 3
    console.log(queue.dequeue()); // Output: 10
    console.log(queue.size()); // Output: 2
    queue.clear();
    console.log(queue.isEmpty()); // Output: true

}