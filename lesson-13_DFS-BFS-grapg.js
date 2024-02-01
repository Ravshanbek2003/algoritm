// class Graph {
//     constructor() {
//       this.vertices = [];
//       this.adjacencyList = new Map();
//     }

//     addVertex(vertex) {
//       this.vertices.push(vertex);
//       this.adjacencyList.set(vertex, []);
//     }

//     addEdge(vertex1, vertex2) {
//       this.adjacencyList.get(vertex1).push(vertex2);
//       this.adjacencyList.get(vertex2).push(vertex1); // for an undirected graph
//     }

//     bfs(startingVertex) {
//       const visited = new Set();
//       const queue = [startingVertex];
//       visited.add(startingVertex);

//       while (queue.length !== 0) {
//         const currentVertex = queue.shift();
//         console.log(currentVertex);

//         this.adjacencyList.get(currentVertex).forEach(neighbor => {
//           if (!visited.has(neighbor)) {
//             visited.add(neighbor);
//             queue.push(neighbor);
//           }
//         });
//       }
//     }

//     dfs(startingVertex) {
//       const visited = new Set();

//       const dfsHelper = (vertex) => {
//         console.log(vertex);
//         visited.add(vertex);

//         this.adjacencyList.get(vertex).forEach(neighbor => {
//           if (!visited.has(neighbor)) {
//             dfsHelper(neighbor);
//           }
//         });
//       };

//       dfsHelper(startingVertex);
//     }
//   }

//   // Example usage:

//   const graph = new Graph();

//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addVertex("D");
//   graph.addVertex("E");

//   graph.addEdge("A", "B");
//   graph.addEdge("B", "C");
//   graph.addEdge("B", "D");
//   graph.addEdge("C", "E");

//   console.log("BFS:");
//   graph.bfs("A");

//   console.log("\nDFS:");
//   graph.dfs("A");

class Graph {
  constructor() {
    this.AdjacencyList = {};
  }
  AddVertex(vertex) {
    if (!this.AdjacencyList[vertex]) {
      this.AdjacencyList[vertex] = [];
    }
  }
  AddEdge(v1, v2) {
    if (this.AdjacencyList[v1]) {
      this.AdjacencyList[v1].push(v2);
    }
    if (this.AdjacencyList[v2]) {
      this.AdjacencyList[v2].push(v1);
    }
  }
  removeEdge(vertex1, vertex2) {
    this.AdjacencyList[vertex1] = this.AdjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.AdjacencyList[vertex2] = this.AdjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(value) {
    if (this.AdjacencyList[value]) {
      const val = this.AdjacencyList[value];
      this.AdjacencyList[value] = [];
      val.forEach((el) => {
        this.AdjacencyList[el] = this.AdjacencyList[el].filter(
          (el) => el !== value
        );
      });
      delete this.AdjacencyList[value];
    }
  }
  // DFS(start) {
  //   let res = [];
  //   let visited = {};
  //   let list = this.AdjacencyList;

  //   function DFSHelper(vertex) {
  //     if (!list[vertex]) return null;

  //     visited[vertex] = true;
  //     res.push(vertex);

  //     list[vertex].forEach((v) => {
  //       if (!visited[v]) {
  //         DFSHelper(v);
  //       }
  //     });
  //   }

  //   DFSHelper(start);
  //   return res;
  // }

  // home work
  DFS(start) {
    let res = [];
    let visited = {};
    let stack = [start];
    let list = this.AdjacencyList;
    res.push(start);
    while (stack.length) {
      let pop = stack.pop();
      visited[pop] = true;
      if (!visited[pop]) res.push(pop);

      list[pop].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          res.push(v);
          stack.push(v);
        }
      });
    }
    return res;
  }
  // BFS(start) {
  //   let res = [];
  //   let queue = [start];
  //   let visited = {};
  //   visited[start] = true;
  //   while (queue.length) {
  //     let shift = queue.shift();
  //     if (!visited[v]) res.push(shift);
  //     this.AdjacencyList[shift].forEach((v) => {
  //       if (!visited[v]) {
  //         visited[v] = true;
  //         queue.push(v);
  //       }
  //     });
  //   }
  //   return res;
  // }

  // HOME WORK
  BFS(start) {
    let res = [];
    let queue = [start];
    let visited = {};
    let list = this.AdjacencyList;
    function BFSHelper(start) {
      visited[start] = true;
      let shift = queue.shift();
      res.push(shift);
      list[shift].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
          if (queue.length) {
            BFSHelper(v);
          } else {
            return;
          }
        }
      });
    }

    BFSHelper(start);
    return res;
  }
}
const graph = new Graph();
graph.AddVertex("london");
graph.AddVertex("busan");
graph.AddVertex("new york");
graph.AddVertex("toshkent");
graph.AddVertex("pekin");
graph.AddEdge("london", "busan");
graph.AddEdge("busan", "new york");
graph.AddEdge("new york", "toshkent");
graph.AddEdge("toshkent", "pekin");
graph.AddEdge("new york", "pekin");
graph.AddEdge("london", "pekin");
//graph.removeEdge("busan", "london")
//graph.removeVertex("busan");
console.log(graph.BFS("london"));
// console.log(graph.DFS("london"));
