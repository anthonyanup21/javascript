🧠 Variables in JavaScript

Variables are containers used to store data.
In JavaScript, we can declare variables using let, const, or var.


🔹 let

Block scoped (works only inside the block { } where it’s defined).

Can be declared first and initialized later.

Value can be changed (manipulated) after initialization.

let name;       // declaration
name = "Alex";  // initialization
console.log(name); // Output: Alex

name = "John";  // reassigning
console.log(name); // Output: John


🔹 const

Block scoped just like let.

Must be declared and initialized at the same time.

Value cannot be changed after initialization.

const PI = 3.14;
console.log(PI); // Output: 3.14

// ❌ Error: Cannot reassign a const variable
// PI = 3.14159;



🔹 var

Function scoped (not block scoped).

Can be declared and initialized later.

If accessed before declaration, it returns undefined (due to hoisting).

Can be redeclared and reassigned.

console.log(a); // Output: undefined (because of hoisting)
var a = 10;
console.log(a); // Output: 10

var a = 20;     // Redeclaration allowed
console.log(a); // Output: 20