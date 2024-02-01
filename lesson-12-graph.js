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
}
const graph = new Graph();
graph.AddVertex("london");
graph.AddVertex("new york");
graph.AddVertex("toshkent");
graph.AddVertex("pekin");
graph.AddVertex("busan");
graph.AddEdge("london", "busan");
graph.AddEdge("london", "new york");
console.log(graph);
graph.removeEdge("busan", "london");
// graph.removeVertex("busan");
console.log(graph);
