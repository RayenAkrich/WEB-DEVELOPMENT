// création du fct add
function add(a: number, b: number): number{
    return a + b;
}
console.log(add(1,3));
// création du fct greet avec age optionnel
function greet(name: string, age?: number){
    if (age != null){
        return `Name : ${name} , Age : ${age}`
    }
    else{
        return `Name : ${name} , No specefic age`
    }
}
console.log(greet("Rayen"))
console.log(greet("Ahmed",12))
// création du fct puissance
function power(base: number, exp: number = 2){
    return base ** exp;
}
console.log(power(2,3));

//surchage de combine
function combine(ch1: string, ch2: string): string;
function combine(num1: number, num2: number): number;
function combine(a:any, b:any):any {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
console.log(combine("Hello ","World"));
console.log(combine(2,3))