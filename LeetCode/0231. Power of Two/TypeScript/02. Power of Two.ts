function isPowerOfTwo(n: number): boolean {
    return Number.isInteger(Math.log10(n) / Math.log10(2));
};