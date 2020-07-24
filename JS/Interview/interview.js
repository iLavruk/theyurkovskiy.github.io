function addAll(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log(`line 10: ${addAll(1,2,3,4,5,6)}`);


console.log(`line 13: ${addAll([1,2,3,4,5,6])}`);

console.log(typeof addAll(1,2,3,4,5,6));
console.log(typeof addAll([1,2,3,4,5,6]));