// ES5
// Declaration
function doStuff() {
    console.log("test dostuf with function es5");
};

doStuff();
// Expression
const doStuff2 = function() {
    console.log("test dostuf with const es5");
}

doStuff2();

// ES6
// Arrow Function
const doStuff3 = () => {
    console.log("test dostuf with arrow function es6");
}

doStuff3();

const addition = (num1, num2) => {
    const total = num1 + num2 

    // untuk mengakhiri atau mengembalikan nilai pada fungsi bisa menggunakan return
    return total;
}

console.log(addition(10, 15));

let bebek = [ 30, 50, 20, 10 ];
console.log(bebek.sort());