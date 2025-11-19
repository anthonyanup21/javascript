# 📘 Today I Learned – JavaScript Basics

## 🔹 Operator Precedence in JavaScript
Operator precedence decides **which operation runs first** when an expression contains multiple operators.

### 📌 Priority Order (High → Low)
1. `*` Multiplication  
2. `/` Division  
3. `+` Addition  
4. `-` Subtraction  

### ✅ Example
```js
console.log(10 + 5 * 2); // 20
// Because 5 * 2 runs first
```

### 📌 Using Parentheses to Change Order
Parentheses `()` have **highest precedence**.

```js
console.log((10 + 5) * 2); // 30
```

---

## 🔹 JavaScript Data Types
JavaScript has 7 main primitive data types:

### 1️⃣ Number  
Represents numeric values  
```js
let age = 20;
```

### 2️⃣ String  
Represents text  
```js
let name = "Anup";
```

### 3️⃣ Boolean  
Represents true/false  
```js
let isLoggedIn = true;
```

### 4️⃣ Undefined  
A variable that is declared but not assigned  
```js
let x; // undefined
```

### 5️⃣ Null  
Represents empty or intentional absence of value  
```js
let data = null;
```

### 6️⃣ BigInt  
For very large numbers  
```js
let big = 1234567890123456789012345n;
```

### 7️⃣ Symbol  
Unique and immutable value  
```js
let id = Symbol("id");
```

---

## 🔹 Type Conversion (String → Number)
You can convert a string into a number using **unary operators**:

### ➕ Unary Plus
```js
console.log(+"20"); // 20 (number)
```

### ➖ Unary Minus
```js
console.log(-"20"); // -20 (number)
```

This conversion happens **during execution**.

---

## ⭐ Summary

- `*` and `/` have higher precedence than `+` and `-`
- Parentheses `()` override normal precedence  
- JavaScript has 7 primitive data types  
- `+` and `-` can convert strings into numbers  

