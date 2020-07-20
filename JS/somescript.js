function calcTriangleArea(a, b, c) {
    console.log(a, b, c);
    var p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

var a = 1, b = 2, c = 3;
var totalArea = 0;
var s1, s2, s3, s4;
s1 = calcTriangleArea(3, 4, 5);
s2 = calcTriangleArea(1, 3, 3)
console.log("S = ", s1);
console.log("S = ", s2);

totalArea = s1 + s2;
console.log("Total: ", totalArea);
