// print odds 1-20
for (var i=1; i<=20; i++) {
    if(i%2 !== 0) {
        console.log(i);
    }
}

// decreasing multiples of 3
for(var i=100; i>0; i--) {
    if(i%3 == 0) {
        console.log(i);
    }
}

// print sequence
for(var i=4; i>=-3.5; i-=1.5) {
    console.log(i);
}

// sigma
var sum= 0;

for(var i=1; i<=100; i++) {
    sum = sum +=i;
}
console.log(sum);

// fractional
var product=1;

for(var i=1; i<=12; i++) {
    product = product *=i;
}
console.log(product);