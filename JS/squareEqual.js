var a, b, c, d, x1, x2;
a = 3, b = 4, c = 1;
d = b * b - 4 * a * c;
console.log("d = ", d);
if (d >= 0) {
    x1 = (-b - Math.sqrt(d)) / (2 * a);
    x2 = (-b + Math.sqrt(d)) / (2 * a);
    console.log("x1 = ", x1);
    console.log("x2 = ", x2);

} else {
    console.log("Square Root has no any roots");
}

