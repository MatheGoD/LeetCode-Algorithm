function countStudents(students: number[], sandwiches: number[]): number {
    while (sandwiches.length !== 0) {
        const topSandwich: number = sandwiches[0];
        
        if (!students.includes(topSandwich)) {
            break;
        }
        
        const aStudent: number | undefined = students.shift();
        
        if (aStudent === topSandwich) {
            sandwiches.shift();
        } else if (typeof aStudent !== 'undefined') {
            students.push(aStudent);
        }
    }
    return students.length;
}
