//  déclaration des variables
let name: string = "Rayen";
let age: number = 20;
let isAdmin: boolean = true;
console.log(`Name: ${name}, Age: ${age}, Admin: ${isAdmin}`);
//  tableau scores contenant uniquement des nombres
let scores: number[] = [12, 15, 18];
console.log("Scores:", scores);
//  tuple [string, number] pour représenter un étudiant.
let student: [string, number] = ["Rayen", 20];
console.log(`Student: Name - ${student[0]}, Age - ${student[1]}`);
//  enum Role { User, Admin, SuperAdmin}
enum Role {
  User,
  Admin,
  SuperAdmin
}
let myRole: Role = Role.Admin;
console.log("My Role:", Role[myRole]);
