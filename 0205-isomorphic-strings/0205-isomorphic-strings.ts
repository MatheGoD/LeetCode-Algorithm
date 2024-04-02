function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sToTMap: { [key: string]: string } = {};
    const tToSMap: { [key: string]: string } = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((sToTMap[charS] && sToTMap[charS] !== charT) ||
            (tToSMap[charT] && tToSMap[charT] !== charS)) {
            return false; 
        }

        sToTMap[charS] = charT; 
        tToSMap[charT] = charS; 
    }

    return true;
}