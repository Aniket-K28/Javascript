// const fruits = ['Apple',"Banana","Grapes"]
// console.log(fruits);

const { DESTRUCTION } = require("dns")

const nums = [1,2,3,4,5,67,8,]
// nums.push(9);
//nums.pop(8)//its remove from last 
// nums.shift(1)
//nums.unshift(0)//its add in start of arrays
// console.log(nums)//
// nums.forEach(n=>console.log(n));
// const double = nums.map(n=>n*3);
// console.log(double);
// const evens = nums.filter(n=>n%2 ===0);
// console.log(evens)

// const user = {
//   id: 1,
//   name: "Aniket",
//   role: "admin"
// };

// console.log(user.name); // Aniket
// console.log(user["role"]); // admin

///array DESTRUCTION/
// const arr = [10,20,30];
// const [a,...rest]  = arr;
// console.log(a);
// console.log(rest)


// const reqBody = ['aniket','admin','best'];
// const [name,role,status] = reqBody;
// console.log(name)

// const users = [
//   { id: 1, name: "Aniket", role: "admin" },
//   { id: 2, name: "Ravi", role: "user" }
// ];

// const result = users.map(({id,name})=>{
//     return `id:${id},name:${name}`
// });
// console.log(result)

const users = [
  { id: 1, name: "Aniket", role: "admin", active: true },
  { id: 2, name: "Ravi", role: "user", active: false },
  { id: 3, name: "Pooja", role: "user", active: true },
  { id: 4, name: "Meena", role: "guest", active: false }
];
const ActiveUsers = users.filter(user => user.active);
const result = ActiveUsers.map(({ id, name }) => `id:${id},name:${name}`);

console.log(result);