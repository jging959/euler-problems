//Challenge 1
var byThree = 0;
var byFive = 0;
for (i = 0; i < 1000; i = i+3) {
    byThree += i;
    if (i % 5 === 0){
        byThree -= i;
    }
}
for (i = 0; i < 1000; i = i + 5){
    byFive += i;
}
console.log(byThree + byFive);

//Challenge 2
var a = 0;
var b = 1;
var sum = 0;

while( a < 4000000) {
    
    if( a % 2 === 0){
        sum += a;
    }
    var c = a + b;
    a = b;
    b = c;
}

console.log(sum);
