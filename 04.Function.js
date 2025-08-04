// function great(name){
//     return `Hello,${name}`;
// }
// console.log(great(('Aniket')));

// function getUserById(id){
//     return user.find(user=>user.id === id);
// }
// console.log(getUserById(2))

// function getAdmins() {
//   return users.filter(user => user.role === "user");
// }
// console.log(getAdmins()); // [{ id: 1, name: "Aniket", role: "admin" }]
// 
// Dummy data
// const users = [
//   { id: 1, name: "Aniket", role: "admin" },
//   { id: 2, name: "Ravi", role: "user" },
//   { id: 3, name: "Pooja", role: "user" }
// ];

// function getAllUsers() {
//   return users;
// }

// function addUser(name, role) {
//   const newUser = {
//     id: users.length + 1,
//     name,
//     role
//   };
//   users.push(newUser);
//   return newUser;
// }

// function deleteUserById(id) {
//   const index = users.findIndex(user => user.id === id);
//   if (index === -1) {
//     return `User with ID ${id} not found.`;
//   }
//   users.splice(index, 1); // permanently removes the user
//   return `User with ID ${id} deleted.`;
// }

// // Testing
// console.log("Before delete:", getAllUsers());
// console.log(deleteUserById(2));
// console.log("After delete:", getAllUsers());
let users = [
  { id: 1, name: "Aniket", role: "admin" },
  { id: 2, name: "Ravi", role: "user" }
];

const getAllUsers = () => users;

const addUser = (name, role) => {
  const newUser = {
    id: users.length + 1,
    name,
    role
  };
  users.push(newUser);
  return newUser;
};

const deleteUserById = (id) => {
  const originalLength = users.length;
  users = users.filter(user => user.id !== id);
  return users.length < originalLength
    ? `User with ID ${id} deleted.`
    : `User with ID ${id} not found.`;
};

// 🧪 Test
console.log(getAllUsers());
console.log(addUser("Pooja", "user"));
console.log(deleteUserById(2));
console.log(getAllUsers());
