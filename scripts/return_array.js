function getMaxMin(...nums){
    return [Math.max(...nums),Math.min(...nums)];
}

let result = getMaxMin(1,2,3,4,5);
console.log(result);

let [max, min] = getMaxMin(1,2,3,4,5);
console.log(max);
console.log(min);