function receivesAFunction(callback) {
    return callback("receives a function and calls it.")
}
function namedFunction() {
    console.log('Hello, world');
}


 function returnsANamedFunction() {
    return namedFunction;
 }
 function returnsAnAnonymousFunction() {
    return function(){
        console.log('anonymous')
    }
}
 