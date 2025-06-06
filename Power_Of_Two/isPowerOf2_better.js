const isPowerOf2 = function(n) {
    return n > 0 && (n & (n - 1)) === 0 && Number.isInteger(n);
};
