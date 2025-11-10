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





⚙️ How JavaScript Handles Variables (Creation, Initialization & Hoisting)

When JavaScript runs your code, it doesn’t execute it line by line immediately.
Instead, it first creates something called an Execution Context — where it goes through two important phases:

🧩 1. Memory Creation Phase (Compilation Phase)

In this phase:

JavaScript scans the code before executing it.

It creates memory space for all variables and functions.

Variables are treated differently depending on how they’re declared:

Keyword	What Happens in Memory Creation
var	Memory is created and initialized with undefined.
let	Memory is created but not initialized (stays in TDZ).
const	Memory is created but not initialized (stays in TDZ).
🧠 Example:
console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

📦 During the Memory Creation Phase:
a → undefined
b → uninitialized (in TDZ)
c → uninitialized (in TDZ)

⚡ 2. Code Execution Phase

In this phase:

JavaScript runs the code line by line.

When it reaches a variable declaration:

For var, it updates the existing memory with the assigned value.

For let and const, it initializes the variable and assigns the value.

✅ After Code Execution:
a → 10
b → 20
c → 30

🚀 What is Hoisting?

Hoisting means that during the memory creation phase,
JavaScript moves all variable and function declarations to the top of their scope before executing the code.

But note:

Only declarations are hoisted — not initializations.

That’s why accessing a variable before its line of declaration can give undefined or a ReferenceError.

🧠 Example:
console.log(name); // undefined
var name = "Alex";

console.log(age);  // ReferenceError
let age = 22;

console.log(country); // ReferenceError
const country = "India";

💭 Internally during memory setup:
name → undefined
age → uninitialized (TDZ)
country → uninitialized (TDZ)

⏳ What is the Temporal Dead Zone (TDZ)?

The Temporal Dead Zone is the period between the creation of a variable (in memory)
and its actual initialization (when JavaScript reaches its declaration line).

During this time, the variable exists in memory but cannot be accessed.
Trying to use it before initialization causes a ReferenceError.

🧩 Example:
{
  // TDZ starts here for `count`
  console.log(count); // ❌ ReferenceError
  let count = 5;      // TDZ ends here
  console.log(count); // ✅ 5
}


🧠 Think of TDZ as a “no access zone”:

|<------------------- TDZ ------------------->|
Start of Scope                      Declaration Line

💡 Key Points about TDZ:

It applies to variables declared using let and const.

The variable exists in memory, but isn’t initialized yet.

Accessing it before declaration → ReferenceError.

The TDZ ends once the line of declaration is executed.


+------------------------------------------+
|          Memory Creation Phase           |
+------------------------------------------+
| var a = undefined                        |
| let b = (uninitialized / TDZ)            |
| const c = (uninitialized / TDZ)          |
+------------------------------------------+
                ⬇️
+------------------------------------------+
|          Code Execution Phase            |
+------------------------------------------+
| a = 10                                   |
| b = 20                                   |
| c = 30                                   |
+------------------------------------------+





🧠 Understanding the defer Keyword and debugger in JavaScript
⚙️ <script> Loading Behavior in JavaScript

When you include JavaScript in an HTML file, the browser reads your HTML from top to bottom.
By default, if a <script> tag is found, it blocks the HTML parsing until the script is downloaded and executed.

This can sometimes slow down page loading, especially if your JavaScript file is large or located at the top of your HTML file.

🚀 What is the defer Attribute?

The defer attribute tells the browser not to block HTML parsing while the script is being downloaded.
It defers the execution of the script until after the HTML document is completely parsed.

✅ Syntax:
```html
<script src="app.js" defer></script>
```

🧩 How defer Works

The script file starts downloading in the background while the HTML continues to load.

Once the HTML document is fully parsed, all deferred scripts are executed in the order they appear.

📊 Without defer
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="app.js"></script> <!-- ⛔ Blocks HTML parsing -->
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

🧠 The browser stops parsing HTML until app.js is fully loaded and executed.

⚡ With defer
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="app.js" defer></script> <!-- ✅ Non-blocking -->
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

✅ The HTML is parsed first, and app.js runs after the DOM is ready.

💡 Key Points about defer
Property	Description
When it runs	After the entire HTML document is parsed
Download behavior	Downloads in parallel with HTML
Execution order	In the order they appear in the document
Works with	External scripts only (src attribute required)
Best for	Scripts that need the DOM ready (like manipulating elements)



Using the debugger Keyword in JavaScript

The debugger keyword is used to pause JavaScript execution at a specific point in your code.
It’s mainly used for debugging purposes inside browsers like Chrome or Firefox.

When the browser encounters debugger, it:

Pauses the code execution, and

Opens the developer tools (DevTools) debugger tab, allowing you to inspect variables, call stacks, and execution flow.

✅ Syntax:
```js
function testDebug() {
  let a = 10;
  let b = 20;
  debugger; // 👈 Execution pauses here
  let c = a + b;
  console.log(c);
}

testDebug();
```

🧠 Explanation:

When the browser reaches the debugger statement, it pauses the script.

You can then step through the code, watch variable values, and find bugs easily.
