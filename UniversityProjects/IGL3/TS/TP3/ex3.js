// variable id qui peut être soit un number, soit un string.
var id;
id = 123;
console.log("id nombre:", id);
id = "abc";
console.log("id string:", id);
var ab = { a: 1, b: "hello" };
console.log(ab);
var currentStatus = "pending";
console.log(currentStatus);
// variable unknown et assertion de type
var unknownValue = "Rayen";
if (typeof unknownValue === "string") {
    // assertion de type pour accéder à la longueur
    var len = unknownValue.length;
    console.log("Length:", len);
}
