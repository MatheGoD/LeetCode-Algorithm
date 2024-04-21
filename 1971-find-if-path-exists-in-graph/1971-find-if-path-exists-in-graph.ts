function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const adjacencyList: { [key: number]: number[] } = {};
  for (let i = 0; i < n; i++) {
    adjacencyList[i] = [];
  }

  for (const [u, v] of edges) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u); 
  }

  const visited = new Set<number>();

  const queue: number[] = [source];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (node === destination) {
      return true;
    }

    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbor of adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return false;
}
