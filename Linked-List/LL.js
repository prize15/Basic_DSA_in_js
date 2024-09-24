/*Linked Lists
        A linked list is a linear data structure where each element is a separate object, known as a node.
         Each node contains data and a reference to the next node in the sequence. 
         For Example: */

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
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
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  const list = new LinkedList();
  list.add(10);
  list.add(20);
  list.printList(); // Output: 10 20
  