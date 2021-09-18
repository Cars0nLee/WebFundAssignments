for (var i=1; i<=100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        var a="FizzBuzz";
        console.log(a);
    }
    else if (i%3 == 0) {
        var b="Fizz";
        console.log(b);
    }
    else if(i%5 == 0) {
        var c="Buzz";
        console.log(c);
    }
    else {
        console.log(i);
    }
}
