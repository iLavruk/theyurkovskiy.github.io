var a = 10;
console.log("1: ", a, b);
test();
var b = 20;
console.log(a, b); // 10 20

function test() {
    a = 30;
    console.log("inside test 1: ", a, b); // 30, un
    var b;
    b = 40;
    console.log("inside test 2:", a, b); // 30, 40
}