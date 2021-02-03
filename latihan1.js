function genap (n) {
    if (n < 0) {
        console.log("masukan nilai lebih dari 0");
    } else if (n%2 ==0){
        genap(n-2);
        console.log(n)
    } else {
        genap (n-1)
    }
}
genap(8)