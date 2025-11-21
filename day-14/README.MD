# 🔁 JavaScript Array Methods — `map()`, `filter()`, `reduce()`  
### (Beginner-Friendly README)

These three methods are the MOST important array methods in JavaScript.  
They help you transform, filter, and reduce data easily.

---

# 🟦 1. `map()`  
### ✔ Used to: **Transform each element of an array**  
### ✔ Returns a **new array** (same length)

Syntax:
```js
array.map((value, index, array) => {
  return newValue;
});
```

---

### ✅ Example 1: Multiply every number by 2
```js
let numbers = [1, 2, 3];

let result = numbers.map(num => num * 2);
console.log(result);
```

Output:
```
[2, 4, 6]
```

---

### ✅ Example 2: Extract names from objects
```js
let users = [
  { name: "Anup", age: 21 },
  { name: "Ravi", age: 22 }
];

let names = users.map(user => user.name);
console.log(names);
```

Output:
```
["Anup", "Ravi"]
```

---

# 🟩 2. `filter()`  
### ✔ Used to: **Pick/keep only the items that satisfy a condition**  
### ✔ Returns a **new array** (length may change)

Syntax:
```js
array.filter((value, index, array) => {
  return true/false; // keep or discard
});
```

---

### ✅ Example 1: Keep only even numbers
```js
let numbers = [1, 2, 3, 4, 5, 6];

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
```

Output:
```
[2, 4, 6]
```

---

### ✅ Example 2: Filter adults
```js
let users = [
  { name: "Anup", age: 17 },
  { name: "Rahul", age: 21 }
];

let adults = users.filter(user => user.age >= 18);
console.log(adults);
```

Output:
```
[{ name: "Rahul", age: 21 }]
```

---

# 🟥 3. `reduce()`  
### ✔ Used to: **Convert the entire array into a single value**  
### ✔ Value can be a number, string, object, array — anything

Syntax:
```js
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

---

### 🧠 Parameters:
- `accumulator` → result stored between iterations  
- `currentValue` → current item being processed  
- `initialValue` → starting value of accumulator  

---

### ✅ Example 1: Sum of all numbers
```js
let numbers = [1, 2, 3, 4];

let total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);
```

Output:
```
10
```

---

### ✅ Example 2: Count how many times each item appears
```js
let letters = ["a", "b", "a", "c", "b", "a"];

let count = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(count);
```

Output:
```
{ a: 3, b: 2, c: 1 }
```

---

# ⭐ Summary Table

| Method | Purpose | Returns | Changes Original Array? |
|--------|----------|----------|--------------------------|
| **map()** | Transform each element | New array (same length) | ❌ No |
| **filter()** | Keep only matching elements | New array (filtered) | ❌ No |
| **reduce()** | Combine all elements into one value | Anything (number, object, array…) | ❌ No |

---

# 🎯 One-Line Definitions

- **map()** → “Create a new array by transforming each element”
- **filter()** → “Create a new array with only the elements that pass a condition”
- **reduce()** → “Convert the whole array into a single value”






# 🔁 JavaScript Array Methods – Practical Examples (map, filter, reduce)

Below are common interview-style problems using `reduce()`, `filter()`, and `map()`  
— including a **tricky reduce question** that freshers and even experienced developers get confused about.

---

# 🟦 Users Array Used in Examples

```js
const users = [
  { firstName: "Anup", lastName: "abc",  age: 21 },
  { firstName: "Anthony", lastName: "dfg", age: 23 },
  { firstName: "Rahul", lastName: "mnop",  age: 29 }
];
```

---

# 🔥 1. Tricky Reduce Question — Count How Many Users for Each Age

```js
const ages = users.reduce((acc, curr) => {
  if (!acc[curr.age]) {
      acc[curr.age] = 0;
  }
  acc[curr.age] += 1;

  return acc;
}, {});
```

### ✔ Output:
```js
{ 21: 1, 23: 1, 29: 1 }
```

### ⭐ What is happening?

- We are **grouping users based on age**
- If an age doesn’t exist in `acc`, we initialize it to **0**
- Then we increase the count for that age

### ❗ Why this is a common interview question?
Because it checks:

- your understanding of **reduce()**
- ability to build **objects dynamically**
- concept of **accumulator**
- working with arrays of objects

---

# 🟩 2. Using filter + map (chaining)

Goal: **Get the firstNames of all users below age 30**

```js
const names = users
  .filter(user => user.age < 30)
  .map(user => user.firstName);

console.log(names);
```

### ✔ Output:
```
["Anup", "Anthony", "Rahul"]
```

### Why it works?

- `filter()` keeps users age < 30  
- `map()` extracts only `firstName`  
- Chaining makes it very clean and readable  

---

# 🟥 3. Doing the Same Using Only reduce()

```js
const outputNames = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
```

### ✔ Output:
```
["Anup", "Anthony", "Rahul"]
```

### How it works?

- We start with an **empty array** `[]`
- For every user with age < 30 → push their firstName into `acc`
- Return the accumulator array

### Why use reduce?
To show you understand:

- reduce can **mimic both map + filter**
- reduce is the most flexible array method
- interviewers often test if you can do the same task with reduce

---

# ⭐ Summary Table (Quick Revision)

| Method | Purpose | What it Returns | Good For |
|--------|----------|------------------|-----------|
| **map()** | Transform each element | New array (same length) | Extracting values |
| **filter()** | Keep only matching items | New array (filtered) | Conditions, removing unwanted items |
| **reduce()** | Convert array → single value | Anything (array, number, object) | Grouping, counting, summing |

---

# 🎯 Final Takeaway

- `map()` → transform  
- `filter()` → select  
- `reduce()` → accumulate / build something complex  
- You can chain `filter()` + `map()`  
- `reduce()` alone can do everything, but chaining is more readable  






# 🔍 JavaScript Array Methods — `some()` & `every()`  
### (Beginner-Friendly README)

Both `some()` and `every()` are array methods used to check **conditions** on array elements.  
They return **true** or **false** based on the condition.

---

# 🟦 1. `some()`  
### ✔ Purpose: Check if **at least one element** satisfies the condition  
### ✔ Returns: `true` / `false`

> **If even ONE element matches → returns true**

#### Syntax:
```js
array.some((value, index, array) => condition);
```

---

## ✅ Example 1: Check if array has even numbers
```js
let numbers = [1, 3, 5, 4];

let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (because 4 is even)
```

---

## ✅ Example 2: Check if at least one user is adult
```js
let users = [
  { name: "Anup", age: 17 },
  { name: "Rahul", age: 22 }
];

let anyAdult = users.some(user => user.age >= 18);
console.log(anyAdult); // true
```

---

### ⭐ When to use `some()`?
- Searching for **at least one match**
- Checking if something **exists**
- Validation (e.g., at least one checkbox checked)

---

# 🟩 2. `every()`  
### ✔ Purpose: Check if **all elements** satisfy the condition  
### ✔ Returns: `true` / `false`

> **If even ONE element fails → returns false**

#### Syntax:
```js
array.every((value, index, array) => condition);
```

---

## ✅ Example 1: Check if all numbers are positive
```js
let numbers = [2, 4, 6, 8];

let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
```

---

## ❌ Example 2: One element breaks the rule
```js
let numbers = [2, 4, -1, 8];

let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // false
```

---

## ✅ Example 3: Check if all users are adults
```js
let users = [
  { name: "Anup", age: 18 },
  { name: "Rahul", age: 25 },
  { name: "Kiran", age: 30 }
];

let allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true
```

---

# ⭐ Comparison Table

| Feature | `some()` | `every()` |
|---------|-----------|------------|
| Checks | If **one** matches | If **all** match |
| Returns | true/false | true/false |
| Stops Early? | ✔ Yes, when first match found | ✔ Yes, when first non-match found |
| Good For | Existence checks | Validating whole arrays |
| Example | "Is there ANY user under 18?" | "Are ALL users adults?" |

---

# 🎯 Final One-Line Definitions

- **some()** → Returns `true` if **at least one** element satisfies the condition  
- **every()** → Returns `true` if **all** elements satisfy the condition  

