// création du fct add
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
// création du fct greet avec age optionnel
function greet(name, age) {
    if (age != null) {
        return "Name : ".concat(name, " , Age : ").concat(age);
    }
    else {
        return "Name : ".concat(name, " , No specefic age");
    }
}
console.log(greet("Rayen"));
console.log(greet("Ahmed", 12));
// création du fct puissance
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(base, exp);
}
console.log(power(2, 3));
function combine(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
console.log(combine("Hello ", "World"));
console.log(combine(2, 3));
