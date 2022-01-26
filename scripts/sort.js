var array = [5, 25, 10];
console.log(array.sort());
console.log(array.sort(function (x, y) {
    return x - y;
}));