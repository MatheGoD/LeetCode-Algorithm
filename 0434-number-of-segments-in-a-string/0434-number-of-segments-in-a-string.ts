function countSegments(s: string): number {
   return s.split(" ").filter(x => x !== "").length;
};