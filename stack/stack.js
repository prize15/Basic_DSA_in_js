/*Stacks:
    A stack follows the Last In, First Out (LIFO) principle.
     You can think of it like a stack of plates
      where you can only add or remove the top plate. */

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20



//Example 2

{
    class Stack {
        constructor() {
            this.items = [];
        }

        // Adds an element to the top of the stack
        push(element) {
            this.items.push(element);
        }

        // Removes and returns the top element of the stack
        pop() {
            if (this.items.length === 0) return "Underflow";
            return this.items.pop();
        }

        // Returns the top element of the stack without removing it
        peek() {
            return this.items[this.items.length - 1];
        }

        // Checks if the stack is empty
        isEmpty() {
            return this.items.length === 0;
        }

        // Returns the size of the stack
        size() {
            return this.items.length;
        }

        // Clears the stack
        clear() {
            this.items = [];
        }
    }

    // Example usage:
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    console.log(stack.peek()); // Output: 30
    console.log(stack.size()); // Output: 3
    console.log(stack.pop());  // Output: 30
    console.log(stack.size()); // Output: 2
    stack.clear();
    console.log(stack.isEmpty()); // Output: true

}