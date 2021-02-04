let printNtimes = []

function manyTimes (times,number) {
    var numtostring = number.toString();
    if (times <= 0) {
        return null;
    }
    else {
        printNtimes.push(numtostring);
        manyTimes(times-1,numtostring);
        return printNtimes
    }
}

console.log(manyTimes(2,3))