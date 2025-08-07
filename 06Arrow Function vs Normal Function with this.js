// const obj = {
//     value : 10,
//     normalFn(){
//         console.log(this.value);
//     },
//     arrowFn : ()=>{
//         console.log(this.value);
//     }
// }
// obj.normalFn();
// obj.arrowFn()

// class user {
//     constructor(name){
//         this.name = name;
//     }
//     great(){
//         console.log(`Hello,${this.name}`)
//     }
// }

// const u = new user("Aniket");
// u.great();

// const user = {
//     name:"Aniket",
//     // age:23,
//     isAdmin:false
// }
// if (!("age" in user)) {
//     console.log("User doesn't have age");
// }else{
//     console.log(user)
// }
// console.log(user)
// user.email = "aniker@gmail.com"
// console.log(user)

// const car = {
//   brand: "Honda",
//   model: "City",
//   year: 2021
// };

// // Loop through car object and print keys and values
// for(let key in car){
//     console.log(`${key}: ${car[key]}`);
// }
const company = {
  name: "TechCorp",
  employees: ["Aniket", "Abhi", "Meena"]
};

// Print each employee name
// company.employees.forEach(employees=>{
//     console.log(employees)
// })
// for(let i = 0;i<company.employees.length;i++){
//     console.log(company.employees[i]);
// }

// const student = {
//   name: "Abhi",
//   marks: {
//     math: 90,
//     science: 80
//   }
// };

// // Access science marks
// console.log(student.marks.science)

// const users = [
//   { id: 1, name: "Aniket", active: true },
//   { id: 2, name: "Ravi", active: false },
//   { id: 3, name: "Meena", active: true }
// ];

// // Filter only active users
// const activeUser = users.filter(users => users.active === true)
// console.log(activeUser)

// function printUserInfo({ name, age }) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
// }

// // Sample object
// const user = {
//   name: "Aniket",
//   age: 23
// };

// // Call the function
// printUserInfo(user);


const users = [
  { id: 1, name: "Aniket", role: "user" },
  { id: 2, name: "Ravi", role: "admin" },
  { id: 3, name: "Meena", role: "user" }
];

function updateUserRole(userId, newRole) {
  const updatedUsers = users.map(user => {
    if (user.id === userId) {
      return { ...user, role: newRole }; // return new object with updated role
    }
    return user; // return original user if no match
  });

  return updatedUsers;
}

// 🔁 Test
const newUsers = updateUserRole(2, "superadmin");
console.log(newUsers);
