/*1. Singly Linked List
In a singly linked list, each node contains data and a reference (or pointer) to the next node in the sequence.
 The last node points to null, indicating the end of the list.

Example:*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

/*2. Doubly Linked List
In a doubly linked list, each node contains data, a reference to the next node,
 and a reference to the previous node. This allows traversal in both directions.

Example: */


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }
}

/*3. Circular Linked List
In a circular linked list, the last node points back to the first node, forming a circle.
 This can be implemented as either a singly or doubly linked list.

Example (Singly Circular Linked List): */


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }
}

/* 4. Circular Doubly Linked List
    In a circular doubly linked list, the last node points back to the first node, 
    and the first node points back to the last node, allowing traversal in both directions in a circular manner.

Example:*/


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
      newNode.prev = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
      newNode.next = this.head;
      this.head.prev = newNode;
    }
  }
}

/*Each type of linked list has its own advantages and use cases.
 For example, singly linked lists are simpler and use less memory,
  while doubly linked lists allow for easier bidirectional traversal.
   Circular linked lists are useful for applications that require a circular traversal of elements. */