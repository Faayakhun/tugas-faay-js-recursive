function range(n) {
    if (n <= 0) {
        return 0
    } else {
        return 1 + range(n-15)
    }
}

console.log(range(18))