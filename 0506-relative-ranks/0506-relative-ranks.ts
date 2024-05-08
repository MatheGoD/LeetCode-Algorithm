function findRelativeRanks(score: number[]): string[] {

  const sortedScores = [...score].sort((a, b) => b - a);

  const rankMap: Record<number, string> = {};

  sortedScores.forEach((s, index) => {
    switch (index) {
      case 0:
        rankMap[s] = "Gold Medal";
        break;
      case 1:
        rankMap[s] = "Silver Medal";
        break;
      case 2:
        rankMap[s] = "Bronze Medal";
        break;
      default:
        rankMap[s] = (index + 1).toString();
        break;
    }
  });

  const result: string[] = score.map(s => rankMap[s]);

  return result;
}