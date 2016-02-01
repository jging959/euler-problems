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
 // Challenge 3

 var num = 600851475143;
var num2 = Math.sqrt(num);
var solution = 0;
for (i = 2; i < 600851475143; i++){
    prime = true;
    if (600851475143 % 2 === 0) {
        for (j = 2; j < Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if(prime){
            solution = j;
        }
    
    }
    
}
console.log(solution);