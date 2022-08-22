

var fib = function(n) {
    return n > 1 ? fib(n-1)+fib(n-2) : n;
};

console.log(fib(3))