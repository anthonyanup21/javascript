
# EXECUTION CONTEXT VS SCOPE
# 📘 JavaScript: Global Execution Context, Global Scope, Local Execution Context & Local Scope  
A clear and simple guide

---

# 🔥 1. Global Execution Context (GEC)

The **Global Execution Context** is created automatically when JavaScript starts running your file.

It has **two phases**:

---

## ⭐ 1. Memory Creation Phase (Hoisting Phase)
JavaScript scans your entire file and allocates memory.

### ✔ var → set to `undefined`
```js
var x = 10;
```

### ✔ function declarations → stored completely (hoisted)
```js
function greet() {
    console.log("Hello");
}
```

### ✔ let & const → memory allocated, BUT placed in TDZ (Temporal Dead Zone)
```js
let a;
const b = 10;
```

During this phase:
- Variables exist but let/const cannot be accessed  
- Functions are fully available  

---

## ⭐ 2. Code Execution Phase
JavaScript executes code **line-by-line**.

- Real values assigned  
- Functions executed  
- Logic runs  

---

# 🔥 2. Global Scope

Global Scope is the **outermost scope** of the program.

- Variables declared outside of any function/block  
- `var` variables **go into global scope**  
- In browsers, global scope connects to the **window object**

### 📌 Example:
```js
var name = "anup";

console.log(window.name); // "anup"
```

### 💡 let & const → NOT in global scope  
They go into **script scope**, not window.

```js
let age = 22;
console.log(window.age); // undefined
```

---

# ⭐ Global Execution Context vs Global Scope

| Concept | Definition |
|---------|------------|
| **Global Execution Context** | Environment where top-level code runs (memory + execution phases) |
| **Global Scope** | Area where global variables/functions live |

---

# 🔥 3. Local Execution Context (Function Execution Context)

Whenever a function is **called**, a new Local Execution Context is created.

Example:
```js
function add(a, b) {
    return a + b;
}

add(5, 10); // creates Local Execution Context
```

Each function call gets its **own execution context**.

Local EC also has two phases:

---

## ⭐ 1. Memory Creation Phase (inside function)
- Parameters created  
- Local variables (var → undefined, let/const → in TDZ)  
- Inner function declarations hoisted  

Example:
```js
function test(x) {
    var a = 10;
    let b = 20;
}
```

---

## ⭐ 2. Code Execution Phase
Function body runs line-by-line.

### ✔ After the function finishes,  
→ Local Execution Context is **destroyed**  
→ Removed from Call Stack  

---

# 🔥 4. Local Scope (Function Scope)

Variables declared inside a function belong to **local scope**.

They can be accessed ONLY inside that function.

Example:
```js
function add() {
    const user = "anup";
    console.log(user); // works
}

console.log(user); // ❌ error — user is not defined
```

### ⭐ Key rule:
Local Scope > Global Scope  
(Local scope variables shadow global ones)

Example:
```js
var userName = "anup";

function add() {
    const userName = "anthony"; // local shadows global
    console.log(userName); // anthony
}

add();
```

---

# ⭐ Local Execution Context vs Local Scope

| Concept | Meaning |
|---------|---------|
| **Local Execution Context** | Environment created when a function runs (memory creation + code execution) |
| **Local Scope** | Variables available *inside that function* |

---

# ⭐ Summary Table

| Type | Created When | Contains | Destroyed? |
|------|--------------|----------|------------|
| **Global Execution Context** | When script starts | global vars & functions | At end of program |
| **Global Scope** | Top-level code | var variables, functions | Never during runtime |
| **Local Execution Context** | When function is called | parameters, local vars | After function ends |
| **Local Scope** | Inside a function | local variables | After function ends |

---

# 🎯 Final Summary

- **Global Execution Context** runs your whole program  
- **Global Scope** contains global variables (var)  
- **Local Execution Context** is created per function call  
- **Local Scope** contains function-specific variables  
- let/const → script scope, not window  
- Local scope variables shadow global ones (nearest scope wins)







# 📘 JavaScript Global Scope, Script Scope & Local Scope  
---

# 🔥 1. Global Scope vs Script Scope

In JavaScript **(browser environment)**:

There are **two top-level scopes**:

## ✔ Global Scope → attached to the `window` object  
Created when you declare a variable using `var`.

```js
var user = "anup";

console.log(window.user); // "anup"
```

## ✔ Script Scope → exists at the top level but NOT attached to window  
Created when you declare variables using `let` or `const`.

```js
let age = 22;
const city = "Mysore";

console.log(window.age);  // undefined ❌
console.log(window.city); // undefined ❌
```

### ⭐ Conclusion
| Variable type | Stored in | Accessible via `window` |
|---------------|-----------|--------------------------|
| var | Global Scope | ✔ Yes |
| let | Script Scope | ❌ No |
| const | Script Scope | ❌ No |

---

# 🔥 2. Why does this code throw an error?

```js
add();

const userName = "anaup";

function add() {
    console.log(userName);
}
```

### ❌ Output:
```
ReferenceError: Cannot access 'userName' before initialization
```

### ✔ WHY?

Because:

- `const userName` is in **script scope**
- Script scope variables are **hoisted but placed in the TDZ**
- You called the function **before the line where userName is initialized**
- So inside the function, JS tries to access `userName`
- But at that moment, the `userName` variable is still in the **Temporal Dead Zone**

### 📌 TDZ (Temporal Dead Zone)
Variables declared with `let` and `const` cannot be accessed **before the line where they are initialized**.

---

# 🔥 3. Local Execution Context (Function Execution Context)

Whenever a function is called:

```js
function add() {
    console.log("inside function");
}
add();
```

JavaScript creates a **Local Execution Context (LEC)**.

It contains:

## ⭐ 1. Memory Creation Phase
- Local variables (var, let, const)
- Parameters
- Function declarations inside the function
- `let` and `const` variables go into TDZ

## ⭐ 2. Code Execution Phase
- Values are assigned
- Statements run line by line

### ✔ After the function finishes  
The **Local Execution Context is destroyed** (removed from call stack).

---

# 🔥 4. Local Scope / Function Scope

Variables declared **inside a function** are in **local scope**.

```js
function add() {
    const message = "Hello";
    console.log(message); // works
}

console.log(message); // ❌ Error — local scope only
```

### ⭐ Local scope is accessible ONLY inside that function  
NOT outside.

---

# 🔥 5. Example: Nearest Scope Wins (Shadowing)

```js
var userName = "anup";

function add() {
    const userName = "anthony";
    console.log(userName);
}

add();
```

### ✔ Output:
```
anthony
```

### ✔ Why?

Because:

- Inside the function, you declared a **local userName**
- Local scope always shadows (overrides) outer scope
- JavaScript looks for variables in this order:

1️⃣ Local scope  
2️⃣ Outer function scope  
3️⃣ Global/script scope  

This is called the **Scope Chain**.

---

# 🔥 6. Summary Table

| Scope | Where Does It Live? | Variables |
|-------|-----------------------|-----------|
| Global Scope | Attached to window | var |
| Script Scope | Top-level but NOT window | let, const |
| Local Scope | Inside functions | var, let, const |

---

# 🎯 Final Summary

- `var` → global scope → accessible via `window.varName`  
- `let` and `const` → script scope → NOT attached to window  
- Function call before `let/const` initialization → TDZ error  
- Each function creates a **Local Execution Context**  
- Local scope variables are accessible ONLY inside the function  
- Nearest scope always wins inside functions (shadowing)


