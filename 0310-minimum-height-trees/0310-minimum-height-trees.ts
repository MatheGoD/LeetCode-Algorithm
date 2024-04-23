function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0]; 
  if (n === 2) return [0, 1]; 

  const adjList: Map<number, Set<number>> = new Map();
  for (const [a, b] of edges) {
    if (!adjList.has(a)) adjList.set(a, new Set());
    if (!adjList.has(b)) adjList.set(b, new Set());
    adjList.get(a).add(b);
    adjList.get(b).add(a);
  }

  const leafNodes: number[] = [];
  for (const [node, neighbors] of adjList.entries()) {
    if (neighbors.size === 1) {
      leafNodes.push(node);
    }
  }

  let remainingNodes = n;

  while (remainingNodes > 2) {
    remainingNodes -= leafNodes.length;
    const newLeafNodes: number[] = [];

    while (leafNodes.length > 0) {
      const leaf = leafNodes.shift();
      const neighbor = [...adjList.get(leaf)][0]; 

      adjList.get(neighbor).delete(leaf);

      if (adjList.get(neighbor).size === 1) {
        newLeafNodes.push(neighbor);
      }
    }

    leafNodes.push(...newLeafNodes);
  }

  return leafNodes;
}
