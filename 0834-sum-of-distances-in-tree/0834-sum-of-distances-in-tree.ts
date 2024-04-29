function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const subtreeSize = Array(n).fill(0);
  const subtreeSum = Array(n).fill(0);

  // Build the adjacency list
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  // First pass to calculate subtree size and sum of distances
  const firstPass = (node: number, parent: number) => {
    subtreeSize[node] = 1; // Every node is at least size 1 (itself)
    for (const child of graph[node]) {
      if (child !== parent) {
        firstPass(child, node);
        subtreeSize[node] += subtreeSize[child]; // Add the size of the subtree
        subtreeSum[node] += subtreeSize[child] + subtreeSum[child]; // Add the sum
      }
    }
  };

  // Second pass to calculate the final distances
  const secondPass = (node: number, parent: number) => {
    if (parent !== -1) {
      subtreeSum[node] = subtreeSum[parent] - subtreeSize[node] + (n - subtreeSize[node]);
    }

    for (const child of graph[node]) {
      if (child !== parent) {
        secondPass(child, node);
      }
    }
  };

  // Start with arbitrary root node (e.g., node 0)
  firstPass(0, -1); // Start from the root node
  secondPass(0, -1); // Calculate the result for each node

  return subtreeSum; // The answer array containing the sum of distances
}