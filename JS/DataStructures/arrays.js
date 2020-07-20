// sum of all elemets of array but if sum > 20 we need to stop

var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
var i = -1;

while( i < arr.length - 1) {
    i++;
    if (i === 6) continue; // infinity loop
    sum += arr[i];
}


console.log(sum);