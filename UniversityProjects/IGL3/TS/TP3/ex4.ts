// création de l'interface User
interface User {
    id: number,
    name: string,
    email?: string | null,
    readonly isAdmin: boolean
}
const user1 : User ={id : 12 , name : "Rayen" , isAdmin : false} // création de user1
console.log(user1);
// création de l'interface Admin
interface Admin extends User {
    permissions : string[]
}
const admin1 : Admin = { id : 1 , name : "Je suis Admin" , isAdmin : true , permissions : ["Delete","Add"] }
console.log(admin1);