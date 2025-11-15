# 📘 JavaScript Arrays (Detailed Guide)

Arrays in JavaScript are **non-primitive (reference type)** used to store multiple values in a single variable.

They are **ordered**, **mutable**, and **index-based** starting from **0**.

---

# 🔥 1. What is an Array?

An array is a **list-like object** used to store multiple values.

Example:
```js
const arr = [10, 20, 30];
```

✔️ Arrays can store:  
- numbers  
- strings  
- booleans  
- objects  
- functions  
- other arrays  

Example:
```js
const mix = ["anup", 22, true, { city: "Mysore" }, [1, 2, 3]];
```

---

# 🔥 2. Creating Arrays

## 1️⃣ Array Literal (most used)
```js
const fruits = ["apple", "banana", "mango"];
```

## 2️⃣ Using Array constructor
```js
const colors = new Array("red", "blue", "green");
```

## 3️⃣ Empty array
```js
const empty = [];
```

---

# 🔥 3. Accessing Elements in Array

Array indexing starts at **0**.

```js
const names = ["anup", "sid", "john"];

console.log(names[0]); // anup
console.log(names[1]); // sid
console.log(names[2]); // john
```

If index doesn't exist:
```js
console.log(names[10]); // undefined
```

---

# 🔥 4. Modifying Array Elements

```js
let arr = [10, 20, 30];

arr[1] = 50;     // modify
arr[3] = 100;    // add new element at index 3

console.log(arr);
// [10, 50, 30, 100]
```

---

# 🔥 5. Arrays Are Reference Types

Arrays do NOT store actual data in the variable.  
They store **memory address (reference)**.

```js
const a = [1, 2, 3];
const b = a;

b[0] = 999;

console.log(a); // [999, 2, 3]
console.log(b); // [999, 2, 3]
```

✔️ Both `a` and `b` point to **same memory address**  
✔️ Changing one changes the other  

---

# 🔥 6. Array Length Property

```js
const arr = [10, 20, 30];
console.log(arr.length); // 3
```

Length updates automatically when items are added/removed.

---

# 🔥 7. Adding Elements to an Array

## ➕ push() — Add at END
```js
arr.push(40);
```

## ➕ unshift() — Add at START
```js
arr.unshift(5);
```

---

# 🔥 8. Removing Elements from an Array

## ➖ pop() — Remove from END
```js
arr.pop();
```

## ➖ shift() — Remove from START
```js
arr.shift();
```

---

# 🔥 9. splice() — Add/Delete in Middle

### ⚡ Delete items
```js
arr.splice(1, 2); // remove 2 items starting at index 1
```

### ⚡ Add items
```js
arr.splice(1, 0, "new item"); // add without removing
```

### ⚡ Replace
```js
arr.splice(1, 1, "changed"); // replace one item
```

---

# 🔥 10. slice() — Copy a Portion

```js
const arr = [10, 20, 30, 40, 50];
const part = arr.slice(1, 3);
console.log(part); // [20, 30]
```

✔️ slice() does NOT modify the original array.

---

# 🔥 12. Searching in Arrays

## indexOf()
```js
arr.indexOf(20); // returns index
```

## includes()
```js
arr.includes(20); // true or false
```

---

# 🔥 13. Array of Objects

Very common in real-time projects.

```js
const users = [
  { name: "anup", age: 22 },
  { name: "sid", age: 20 }
];

console.log(users[0].name); // anup
```

---

# 🔥 14. Multi-Dimensional Arrays (Array inside Array)

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matrix[1][2]); // 6
```

---

# 🔥 15. Arrays Are Objects Internally

```js
typeof []  // "object"
```

JavaScript treats arrays as a special kind of object with:
- numbered indexes  
- length property  
- built-in methods  

---

# 🔥 16. Common Array Methods (Short Overview)

| Method | Description |
|--------|-------------|
| push() | Add at end |
| pop() | Remove from end |
| unshift() | Add at start |
| shift() | Remove from start |
| splice() | Add/delete/replace in middle |
| slice() | Copy part of array |
| indexOf() | Returns index |
| includes() | Returns true/false |

---

# 🎯 Final Summary

- Arrays are **reference types** stored in the heap  
- Index starts from **0**  
- Supports adding, removing, modifying elements  
- Powerful built-in methods  
- Arrays can hold any data type  
- Array comparison checks **address**, not content  







# 📘 JavaScript: Shallow Copy vs Deep Copy  
Understanding how objects & arrays are copied in memory

---

# 🧠 Why do we need copying?

When you assign one object/array to another variable:

```js
const a = { name: "anup" };
const b = a;
```

Both `a` and `b` point to the **same memory address**.

So changing one changes the other.

We use *shallow copy* or *deep copy* to avoid this.

---

# 🔥 1. Shallow Copy

A **shallow copy** copies **only the top-level** values.

If the object contains **nested objects/arrays**,  
the **reference (address)** of the nested object is copied — NOT the actual value.

So the inner object is **shared**.

---

## 📌 Shallow Copy Methods

### ✔️ Using spread operator
```js
const obj1 = { name: "anup", address: { city: "Mysore" } };

const obj2 = { ...obj1 };//mostly we use this method to do shallow copy
```

### ✔️ Using Object.assign()
```js
const obj2 = Object.assign({}, obj1);
```

---

## 🧠 Shallow Copy Behavior
```js
obj2.address.city = "Bangalore";
console.log(obj1.address.city); // Bangalore ❗
```

Reason:
- `address` is an object  
- shallow copy copied **reference**, not value  
- both point to **same memory address**

---

# ⭐ Shallow Copy Summary
- Top-level values are copied  
- Nested objects are NOT copied (reference copied)  
- Changes in nested objects affect both copies  

---

# 🔥 2. Deep Copy

A **deep copy** copies the **entire object**, including all nested objects.

A completely new memory address is created for every level.

So modifying one object will NOT affect the other.

---

## 📌 Deep Copy Methods

### ✔️ JSON method (simple deep copy)
```js
const obj2 = JSON.parse(JSON.stringify(obj1));
```

### ✔️ structuredClone() (modern JavaScript)
```js
const obj2 = structuredClone(obj1);
```

### ✔️ Manual deep copy (using recursion)
(Skip for now unless needed)

---

## 🧠 Deep Copy Behavior
```js
const obj1 = { name: "anup", address: { city: "Mysore" } };
const obj2 = structuredClone(obj1);

obj2.address.city = "Bangalore";

console.log(obj1.address.city); // Mysore ✔️
console.log(obj2.address.city); // Bangalore
```

✔️ Nested objects are also copied  
✔️ No shared references  
✔️ Changes do NOT affect original  

---

# ⭐ Deep Copy Summary
- All levels are copied  
- No shared references  
- Perfect when dealing with **nested objects or arrays**  

---

# 🧠 Memory Address Difference

| Action | Result |
|--------|--------|
| Shallow copy | Top-level new address ✔️, nested same address ❌ |
| Deep copy | Every level gets a new address ✔️ |

Example memory:

### Shallow Copy
```
obj1.address → #5001
obj2.address → #5001 (same)
```

### Deep Copy
```
obj1.address → #5001
obj2.address → #6002 (different)
```

---

# 🎯 Final Comparison Table

| Feature | Shallow Copy | Deep Copy |
|---------|--------------|-----------|
| Top-level copy | ✔️ Yes | ✔️ Yes |
| Nested object copy | ❌ No (reference copied) | ✔️ Yes (new memory) |
| Independent changes | ❌ No | ✔️ Yes |
| Methods | spread, Object.assign | JSON.parse(JSON.stringify), structuredClone |

---

# 🔥 Final Summary (1-Line)
### ✔️ Shallow Copy → copies only surface level  
### ✔️ Deep Copy → copies entire structure (no shared memory)




