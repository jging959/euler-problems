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