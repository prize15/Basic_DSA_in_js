//Graphs : A graph is a collection of nodes (vertices) and edges connecting pairs of nodes.


{
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }
  printGraph() {
    const keys = this.adjacencyList.keys();
    for (let key of keys) {
      const values = this.adjacencyList.get(key);
      let conc = "";
      for (let value of values) {
        conc += value + " ";
      }
      console.log(key + " -> " + conc);
    }
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
graph.printGraph(); // Output: A -> B B -> A

}
//------------SEPERATOR------------------



 //Example of a graph data structure including basic operations like adding vertices, adding edges,
 // and performing graph traversals.

//Graph Class
//We’ll use an adjacency list to represent the graph. This is a common and efficient way to store graphs.



class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    );
  }

  // Remove a vertex and all its edges
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Depth-First Search (DFS) - Recursive
  depthFirstSearch(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  // Breadth-First Search (BFS)
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

//Example Usage
//Let’s see how we can use this graph structure:


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log(graph.depthFirstSearch('A')); // Output: [ 'A', 'B', 'D', 'E', 'C' ]
console.log(graph.breadthFirstSearch('A')); // Output: [ 'A', 'B', 'C', 'D', 'E' ]

//This example covers the basics of creating a graph, adding vertices and edges,
// and traversing the graph using both Depth-First Search (DFS) and Breadth-First Search (BFS). 