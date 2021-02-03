function sequence (n) {
    if (n == 1) {
        return 3
    } else {
        return 2 * sequence(n-1)
    }
}

console.log(sequence(5))