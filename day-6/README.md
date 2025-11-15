# 📘 JavaScript: Primitive & Non-Primitive (Reference) Types

## 🔹 Primitive Data Types (Value Types)
Primitive types store **actual values** in memory.

Types:
- Number
- String
- Boolean
- Null
- Undefined
- BigInt
- Symbol

### 📌 Example
```js
let a = 10;
let b = a;   // value is copied

a = 20;

console.log(a); // 20
console.log(b); // 10 (separate copy)
```
➡️ **Each variable has its own copy**.

---

## 🔹 Non-Primitive Data Types (Reference Types)
There is **only ONE non-primitive type → Object**.

Objects include:
1. **Object Literals**
2. **Arrays**
3. **Functions**

Non-primitive values store **memory address (reference)**, not the actual data.

---

## 🆚 Comparing Primitive vs Non-Primitive

### ✅ Primitive Comparison
Compared by **value**
```js
let x = 5;
let y = 5;
console.log(x === y); // true
```

### ❌ Non-Primitive Comparison
Compared by **reference (address)**, NOT values inside.
```js
const user1 = { name: "anup" };
const user2 = { name: "anup" };

console.log(user1 === user2); // false ❌ (different memory address)

const user3 = user1;
console.log(user1 === user3); // true ✔️ (same address)
```

---

## 🏗️ Creating an Object
```js
const user = {
    firstName: "anup",
    lastName: "abc"
};
```

OR using string keys:

```js
const user = {
    "firstName": "anup",
    "lastName": "abc"
};
```

---

## 🔍 Accessing Object Properties

### 1️⃣ Dot notation
```js
user.firstName;
```

### 2️⃣ Bracket notation
```js
user["firstName"];
```

### ⭐ When property name is stored in a variable → use brackets
```js
const key = "lastName";
console.log(user[key]); // "abc"
```

---

## ➕ Adding properties to an object

### Using dot notation
```js
user.age = 26;
```

### Using bracket notation
```js
user["age"] = 26;
```

### Using a variable as a key
```js
let prop = "city";
user[prop] = "Mysore";
```

---

## 🧠 Important Concept: Objects store references

When you create an object inside another object,  
JavaScript does NOT store the real object —  
it stores the **memory address** of that object.

### Example
```js
const address = {
    city: "Mysore"
};

const user = {
    name: "anup",
    address: address  // only address reference stored
};

address.city = "Bangalore";

console.log(user.address.city); // Bangalore ✔️
```

➡️ Both variables point to the **same memory address**.

---

## 🎯 Summary  
- Primitive = value types (store actual value)  
- Non-primitive = reference types (store memory address)  
- Only one non-primitive type → Object  
- Objects include literals, arrays, and functions  
- Comparing objects compares **addresses**, not content  
- Dot & bracket notation to access properties  
- Bracket notation required when key is a variable  







# 📘 Why `const` Objects Can Be Modified in JavaScript

## 🔹 `const` with Primitive Types (Value Types)
Primitive types store **actual values**.

When you use `const` with primitives:
- You **cannot change the value**
- The variable **must always point to the same value**

### ❌ Example (primitive cannot be changed)
```js
const a = 10;
a = 20;  
// ❌ Error: Assignment to constant variable (because if we modify or assign new value the memory address changes and it will raise an error)
```

➡️ Because changing the value means **changing the memory location**, which is not allowed for `const`.

---

## 🔹 `const` with Non-Primitive Types (Reference Types)
Objects, arrays, and functions store **reference (memory address)**, not the actual data.

### ✔️ With `const`, the reference (memory address) cannot change  
BUT  
### ✔️ The data **inside** the object can change

### ✔️ Example (object can be modified)
```js
const user = {
  name: "anup"
};

user.age = 20;        // Allowed
user.name = "abc";    // Allowed

console.log(user);
```

➡️ This works because:  
- `user` still points to the **same memory address**  
- Only the internal values **inside** that memory are updated  
- **The reference itself does NOT change**

---

## ❌ What is NOT allowed with const object
```js
const user = { name: "anup" };

user = { age: 20 }; 
// ❌ Error: Assignment to constant variable
```

➡️ This is not allowed because:  
You are trying to change the **reference** (memory address), not just inner data.

---

## 🧠 Key Difference

### 📌 Primitive (`const`)
- Stores **value**
- Cannot change the value
- Changing value = changing memory address → ❌ not allowed

### 📌 Object (`const`)
- Stores **reference (address)**
- Inner data **can change**
- Reference must not change → variable cannot point to a new object

---

## 🎯 Summary
- `const` blocks **reassignment**, NOT modification.  
- Primitive → value cannot change  
- Object → reference cannot change, but properties can  





# 📘 JavaScript Object Property Control  
### delete • Object.seal() • Object.freeze()

---

# 🔥 1. Deleting a Property from an Object

We can use the `delete` keyword to remove a property from an object.

### 📌 Example
```js
const user1 = {
    name: "anup",
    age: 22
};

delete user1.name;

console.log(user1);
// { age: 22 }
```

✔️ `delete` removes the key and its value  
✔️ Works only if object is not sealed or frozen  

---

# 🔥 2. Object.seal()

`Object.seal(obj)` **prevents adding or deleting** properties.

But **existing properties can still be modified**.

### 📌 Example
```js
const user = { name: "anup", age: 22 };

Object.seal(user);

user.city = "Mysore";   // ❌ cannot add new property
delete user.age;        // ❌ cannot delete property
user.name = "abc";      // ✔️ can modify existing property

console.log(user);
// { name: "abc", age: 22 }
```

### ✔️ Allowed in sealed object:
- Modify existing values

### ❌ Not allowed:
- Add new properties  
- Delete existing properties  

---

# 🔥 3. Object.freeze()

`Object.freeze(obj)` **completely locks** the object.

You cannot:
- ❌ Add new properties  
- ❌ Delete properties  
- ❌ Modify existing properties  

The object becomes fully **immutable**.

### 📌 Example
```js
const user = { name: "anup", age: 22 };

Object.freeze(user);

user.name = "abc";   // ❌ cannot modify
user.city = "Mysore"; // ❌ cannot add
delete user.age;      // ❌ cannot delete

console.log(user);
// { name: "anup", age: 22 }
```

---

# 🧠 Final Comparison Table

| Feature | Normal Object | Sealed (`Object.seal()`) | Frozen (`Object.freeze()`) |
|--------|----------------|---------------------------|-----------------------------|
| Add new properties | ✔️ Yes | ❌ No | ❌ No |
| Delete properties | ✔️ Yes | ❌ No | ❌ No |
| Modify existing properties | ✔️ Yes | ✔️ Yes | ❌ No |
| Object mutability | Mutable | Partially locked | Fully locked |

---

# 🎯 Summary  
- `delete obj.key` → removes a property  
- `Object.seal()` → cannot add/delete, but can modify  
- `Object.freeze()` → cannot add/delete/modify  





