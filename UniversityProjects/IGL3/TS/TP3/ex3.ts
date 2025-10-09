// variable id qui peut être soit un number, soit un string.
let id: number | string;
id = 123;
console.log("id nombre:", id);
id = "abc";
console.log("id string:", id);

// deux types A et B .
type A = { a: number };
type B = { b: string };
// l'intersection
type AB = A & B;
const ab: AB = { a: 1, b: "hello" };
console.log(ab);

// alias Status qui peut valoir "pending", "done" ou "canceled".
type Status = "pending" | "done" | "canceled";
let currentStatus: Status = "pending";
console.log(currentStatus);

// variable unknown et assertion de type
let unknownValue: unknown = "Rayen";
if (typeof unknownValue === "string") {
  // assertion de type pour accéder à la longueur
  let len = (unknownValue as string).length;
  console.log("Length:", len);
}
