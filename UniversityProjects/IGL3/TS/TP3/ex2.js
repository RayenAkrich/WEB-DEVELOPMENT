//  déclaration des variables
var name = "Rayen";
var age = 20;
var isAdmin = true;
console.log("Name: ".concat(name, ", Age: ").concat(age, ", Admin: ").concat(isAdmin));
//  tableau scores contenant uniquement des nombres
var scores = [12, 15, 18];
console.log("Scores:", scores);
//  tuple [string, number] pour représenter un étudiant.
var student = ["Rayen", 20];
console.log("Student: Name - ".concat(student[0], ", Age - ").concat(student[1]));
//  enum Role { User, Admin, SuperAdmin}
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var myRole = Role.Admin;
console.log("My Role:", Role[myRole]);
