var makeOperation = function(arr, fn ) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arre = [1,2,3,4,5];

var arrR1 = makeOperation(arre, function(item) {
    return item * 2;
});
console.log(arrR1);


var arrR2 = makeOperation(arre, function(item) {
    return item > 3;
});
console.log(arrR2);


var sumToMultiplication = function(sum, item) {
    return item*item+sum;
}

var arrR3 = makeOperation(arre,sumToMultiplication.bind(this,2));
console.log(arrR3);

arre.forEach(function(item){
   console.log(item);  
});

console.log('\n');  

for (var i of arre){
    console.log(i);
}
