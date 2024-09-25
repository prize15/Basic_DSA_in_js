/*Trees:
A tree is a hierarchical data structure consisting of nodes,
 with a single node as the root and zero or more child nodes. */

 //Demonstration:
{
class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  addChild(child) {
    this.children.push(child);
  }
}

const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
root.addChild(child1);
root.addChild(child2);
console.log(root);
}


//--------------SEPERATOR----------------- 

/* Example of Tree Data Structure: 
 fully-fledged example of a tree data structure, including basic operations like insertion,
  searching, and traversal.

Tree Node Class :
First, let’s define a class for the tree node: */


class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

//Tree Class : we’ll create a class for the tree itself:



class Tree {
  constructor() {
    this.root = null;
  }

  // Insert a node in the tree
  insert(value, parentValue) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      const parent = this.findBFS(parentValue);
      if (parent) {
        parent.children.push(newNode);
      } else {
        console.log('Parent not found');
      }
    }
  }

  // Find a node using Breadth-First Search (BFS)
  findBFS(value) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node.value === value) {
        return node;
      }
      for (const child of node.children) {
        queue.push(child);
      }
    }
    return null;
  }

  // Traverse the tree using Depth-First Search (DFS)
  traverseDFS(callback) {
    function traverse(node) {
      callback(node);
      for (const child of node.children) {
        traverse(child);
      }
    }
    traverse(this.root);
  }

  // Traverse the tree using Breadth-First Search (BFS)
  traverseBFS(callback) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      callback(node);
      for (const child of node.children) {
        queue.push(child);
      }
    }
  }

}

//Example Usage : let’s see how we can use this tree structure:



const tree = new Tree();
tree.insert('A'); // Root node
tree.insert('B', 'A');
tree.insert('C', 'A');
tree.insert('D', 'B');
tree.insert('E', 'B');
tree.insert('F', 'C');

// Traverse the tree using DFS
tree.traverseDFS(node => console.log(node.value)); // Output: A B D E C F

// Traverse the tree using BFS
tree.traverseBFS(node => console.log(node.value)); // Output: A B C D E F

//This example covers the basics of creating a tree, inserting nodes, and traversing the tree
// using both Depth-First Search (DFS) and Breadth-First Search (BFS). 