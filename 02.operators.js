// const a= 10;
// const b= "10";
// console.log(a==b);
// console.log(a===b);

// let x = 5;
// x  *= 3;
// console.log(x);
// let age = parseInt(prompt("Enter your age:"));
// let hasId = prompt("Do you have ID? (yes/no)").toLowerCase() === "yes";
// let canEnter = age>=18 && hasId;
// alert(canEnter? "✅ You can enter." : "❌ You cannot enter.");
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter your age: ", (ageInput) => {
  const age = parseInt(ageInput);

  rl.question("Do you have ID? (yes/no): ", (idInput) => {
    const hasId = idInput.toLowerCase() === "yes";
    const canEnter = age >= 18 && hasId;

    console.log(canEnter ? "✅ You can enter." : "❌ You cannot enter.");
    rl.close();
  });
});
