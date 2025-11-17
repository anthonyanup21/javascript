# 📘 JavaScript Execution Context, Call Stack & Hoisting  
A complete beginner-friendly guide (WITHOUT `this` topic)

---

# 🔥 1. What Is Execution Context?

Execution Context is the **environment** where JavaScript code runs.

It decides:
- how variables are stored  
- how functions are stored  
- how code executes step-by-step  

JavaScript has **two types** of execution contexts:

1. **Global Execution Context (GEC)**
2. **Function Execution Context (FEC)**

---

# 🔥 2. Global Execution Context (GEC)

Created automatically when your JavaScript file starts running.

GEC runs in **two phases**:

---

## ⭐ 1. Memory Creation Phase (Hoisting Phase)

JavaScript scans your entire file and allocates memory.

### ✔ `var` → initialized as **undefined**
```js
var x; // undefined during memory creation phase
```

### ✔ Function declarations → **full function stored in memory**
```js
function greet() {
    console.log("Hello");
}
```

### ✔ `let` and `const` → memory allocated but placed in **TDZ (Temporal Dead Zone)**  
They cannot be accessed until code execution reaches them.

```js
let a;  // in TDZ
const b; // in TDZ
```

---

## ⭐ 2. Code Execution Phase

Code runs **line by line**.

- Actual values assigned to variables  
- Functions called  
- Logic executed  

Example:

```js
var x = 10; // x gets value 10 now
```

---

# 🔥 Example: Function hoisting works

```js
a("anup"); // ✔ works (function is hoisted)

function a(name) {
    console.log("Hello", name);
}
```

Output:
```
Hello anup
```

Because the whole function `a()` was stored in memory during the memory creation phase.

---

# 🔥 3. Function Execution Context (Local Execution Context)

Whenever a function is **called**, a new execution context is created.

Example:

```js
function add(x, y) {
    return x + y;
}
add(5, 10);
```

A new **Function Execution Context (FEC)** is created.

Each FEC also has two phases:

---

## ⭐ FEC 1: Memory Creation Phase  
Inside the function:

- parameters created  
- variables declared  
- function declarations inside the function are hoisted  
- let & const go into TDZ

---

## ⭐ FEC 2: Code Execution Phase  
Function body executes line-by-line.

### ✔ After function finishes  
The entire **Function Execution Context is removed** from memory.

---

# ⭐ Summary: GEC vs FEC

| Feature | Global EC | Function EC |
|--------|------------|-------------|
| Created | When script starts | Every time function is called |
| Phases | Memory + Execution | Memory + Execution |
| Destroyed? | No | Yes |
| Contains | Global variables, functions | Local variables, arguments |

---

# 🔥 4. Script Scope vs Global Scope

✔ `var` → in **Global Scope**  
✔ `let` & `const` → in **Script Scope**

### ⭐ Script Scope:
- Exists at top level
- Removed after entire code finishes
- Does NOT attach to global object  

### ⭐ Global Scope:
- Exists for entire program

---

# 🔥 5. Call Stack

Call Stack tells JavaScript **which function is currently running**.

### How it works:
1. GEC pushed to stack  
2. When a function calls → its FEC is pushed  
3. When a function ends → it is popped  
4. After script ends → GEC removed  

---

## Example using recursion (best for visualization)

```js
function add(n) {
    if (n == 0) return;
    console.log("hello world");
    add(n - 1);
}

add(5);
```

Call stack grows like:

```
add(5)
 add(4)
  add(3)
   add(2)
    add(1)
     add(0)
```

Each call creates a new **Function Execution Context**.

---

# 🔥 6. Hoisting (Actual Meaning)

Most people say:
> “Hoisting moves declarations to the top.”

❌ Wrong.  
JavaScript **does NOT move code**.

### ✔ Correct Definition:
**Hoisting is JavaScript’s behavior of allocating memory for variables and functions before code execution.**

---

# ⭐ Hoisting Behavior Summary

| Type | Hoisted? | Initial Value | TDZ? | Can use before? |
|------|----------|----------------|------|-----------------|
| function declaration | ✔ yes | full function | no | ✔ yes |
| var | ✔ yes | undefined | no | ⚠ yes but undefined |
| let | ✔ yes | no value | yes | ❌ no |
| const | ✔ yes | no value | yes | ❌ no |
| function expression | var part hoisted | undefined | TDZ for let/const | ❌ no |

---

# 🔥 Example of hoisting failure

```js
sayHi(); // ❌ Error (sayHi is in TDZ)

const sayHi = function() {
    console.log("hello");
}
```

Even with:

```js
let sayHi = function(){};
var sayHi = function(){};
```

You **CANNOT** call it before initialization,  
because only function **declarations** are hoisted fully.

---

# 🔥 7. Function Declaration vs Function Expression

## ✔ Function Declaration (hoisted)
```js
function greet() {
    console.log("Hello");
}
```
You can call this anywhere in the file **before or after** definition.

---

## ✔ Function Expression (NOT hoisted fully)
```js
const greet = function() {
    console.log("Hello");
};
```

Cannot call before assignment.

---

# 🎯 Final Summary

- Execution Context = environment where JS runs  
- Global Execution Context → created first  
- Function Execution Context → created on every function call  
- Both have:
  - Memory Creation Phase (hoisting)
  - Code Execution Phase  
- `var` → hoisted as undefined  
- `let/const` → hoisted but in TDZ  
- Function Declarations → fully hoisted  
- Function Expressions → not fully hoisted  
- Call stack tracks execution contexts  



