let printNtimes = []

function manyTimes (times,number) {
    let printNtimes = []
    var numtostring = number.toString();
    if (times <= 0) {
        return [];
    }
    else { 
        printNtimes = manyTimes(times-1,number)
        printNtimes.push(numtostring);
        return printNtimes
    }
}

console.log(manyTimes(4,3))
console.log(manyTimes(7,5))