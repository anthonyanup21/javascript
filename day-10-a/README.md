# 🧠 Lexical Scope, Block Scope & Accidental Global Variables in JavaScript

## 🔹 Lexical Scope (Static Scope)
Lexical scope means **JavaScript decides variable accessibility based on where the code is written** (its position in the file).  
Functions can access variables from their **parent function**.

### ✅ Example
```js
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    console.log(a); // accessible
    console.log(b); // accessible
  }

  inner();
}

outer();
```
✔ Scope is determined at **write-time**, not runtime.

---

## 🔹 Block Scope
A block is anything inside `{ }`.

Variables declared using:
- `let`
- `const`

are **block-scoped**, meaning they exist only inside the block.

### ✅ Example
```js
{
  let x = 10;
  const y = 20;
}

console.log(x); // ❌ Error
console.log(y); // ❌ Error
```

### ⚠ Note
`var` is **NOT block scoped** → it ignores `{ }`.

---

## 🔹 Accidental Global Variables (Without let/const/var)
If you write:
```js
x = 20;
```
without using `let`, `const`, or `var`, JavaScript automatically creates a **global variable**.

### In browser:
```js
x = 20;
console.log(window.x); // 20
```

### ❌ Why this is bad?
- Creates accidental globals  
- Hard to debug  
- Can overwrite existing variables  
- Pollutes global scope

---

## 🔹 Prevent Accidental Globals with `"use strict"`
If you enable strict mode:
```js
"use strict";
x = 20; // ❌ Error: x is not defined
```

Strict mode **forces you** to declare variables properly.

---

## ⭐ Summary Table

| Concept | Description |
|--------|-------------|
| **Lexical Scope** | Scope decided by code position (write-time). |
| **Block Scope** | `let` and `const` exist only inside `{ }`. |
| **var** | Not block scoped; becomes function/global scoped. |
| **Accidental Globals** | Happen when variables are created without let/const/var. |
| **"use strict"** | Prevents accidental global variable creation. |




