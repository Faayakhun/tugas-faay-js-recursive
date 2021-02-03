let printNtimes = []

function manyTimes (times,number) {
    if (times <= 0) {
        return null;
    } else {
        printNtimes.push(number);
        manyTimes(times-1,number);
        return printNtimes
    }
}

console.log(manyTimes(2,3))