# 🟢 Truthy & Falsy in JavaScript

In JavaScript, every value is either **truthy** or **falsy** when evaluated in a boolean context (like `if`, `while`, `&&`, `||`).

---

## 🚫 Falsy Values (Only 8 in JavaScript)

These values become **false** when converted to Boolean:

1. `false`
2. `0`
3. `-0`
4. `0n`     // BigInt zero
5. `""`     // empty string
6. `null`
7. `undefined`
8. `NaN`

⚠️ **Only these eight values are falsy.**

---

## 🟢 Truthy Values

Anything **not** in the falsy list is **truthy**, for example:

- `true`
- `"hello"` (non-empty string)
- `" "` (space)
- `1`, `-5`, `3.14`
- `"0"` (string zero)
- `"false"` (string false)
- `[]` (empty array)
- `{}` (empty object)
- `function(){}`
- `Infinity`

---

## 🧪 Examples

### ✔ Example 1: Truthy
```js
if ("hello") {
  console.log("Truthy");
}
```

### ✔ Example 2: Falsy
```js
if (0) {
  console.log("This won't run");
}
```

### ✔ Example 3: Arrays & Objects
```js
if ([] && {}) {
  console.log("Both are truthy");
}
```

---

## 🧠 Testing Truthiness
Use `Boolean(value)`:

```js
Boolean("");       // false
Boolean("Hi");     // true
Boolean([]);       // true
Boolean(null);     // false
```

---






# 🔁 Comparison Operators in JavaScript

Comparison operators are used to compare two values.  
They return **true** or **false**.

---

## ✅ Equality Operators

### `==` (Loose Equality)
Compares **values**, performs **type conversion**.

```js
5 == "5"     // true
0 == false   // true
null == undefined // true
```

---

### `===` (Strict Equality)
Compares **values + types** (NO type conversion).

```js
5 === "5"   // false
10 === 10   // true
```

---

## ❌ Inequality Operators

### `!=` (Loose Inequality)
Checks if values are **not equal**, allows type conversion.

```js
5 != "5"   // false
```

---

### `!==` (Strict Inequality)
Checks if values or types are **not equal**.

```js
5 !== "5"  // true
```

---

## 📈 Relational Operators

### `>` (Greater than)
```js
10 > 5   // true
```

### `<` (Less than)
```js
3 < 1    // false
```

### `>=` (Greater than or Equal)
```js
10 >= 10   // true
```

### `<=` (Less than or Equal)
```js
2 <= 3     // true
```

---

## 🧠 Special Comparison Cases

### 🔹 String Comparisons (based on Unicode)
```js
"b" > "a"     // true
"cat" > "car" // true
```

### 🔹 Boolean Comparisons
Converted to numbers:
```js
true == 1   // true
false == 0  // true
```

### 🔹 `null` and `undefined`
```js
null == undefined   // true
null === undefined  // false

null >= 0   // true (weird JS behavior!)
null > 0    // false
```

### 🔹 NaN (Never equal to anything)
```js
NaN == NaN   // false
NaN === NaN  // false
```


---

## 🧪 Example

```js
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("Minor");
}
```

---

## 📌 Summary Table

| Operator | Meaning |
|----------|---------|
| `==` | loose equality |
| `===` | strict equality |
| `!=` | loose inequality |
| `!==` | strict inequality |
| `>` | greater than |
| `<` | less than |
| `>=` | greater or equal |
| `<=` | less or equal |

---






# 🔐 Logical Operators in JavaScript

Logical operators are used to combine multiple conditions and return either **true** or **false**.

---

## ✅ 1. AND Operator (`&&`)
**Returns true only if *all* conditions are true.**

### ✔ Example
```js
console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 > 3 && 10 > 5); // true
```

---

## ✅ 2. OR Operator (`||`)
**Returns true if *at least one* condition is true.**

### ✔ Example
```js
console.log(true || false);  // true
console.log(false || false); // false
console.log(10 > 20 || 5 < 8); // true
```

---

## ❌ 3. NOT Operator (`!`)
**Reverses the boolean value.**

### ✔ Example
```js
console.log(!true);  // false
console.log(!false); // true
console.log(!(10 > 5)); // false
```

---

## ⚡ Short-Circuit Behavior
Logical operators stop evaluating once the result is known.

### ✔ Example
```js
console.log(false && "Hello"); // false  (doesn't check second)
console.log(true || "World");  // true   (doesn't check second)
```

---

## 🧠 Truthy & Falsy Values
Used frequently with logical operators.

### Falsy values:
```
false, 0, "", null, undefined, NaN
```

### Truthy values:
Everything else (examples: `"hello"`, 123, [], {}, true)

---

## ⭐ Practical Use Cases

### ✔ Default Values (OR `||`)
```js
let name = userName || "Guest";
```

### ✔ Check all conditions (AND `&&`)
```js
if (isLoggedIn && isAdmin) {
  console.log("Welcome Admin");
}
```

### ✔ Toggle Boolean (!)
```js
isLightOn = !isLightOn;
```

---






# 🧠 Decision Making in JavaScript

In JavaScript, decision-making statements help you execute different code blocks based on conditions.

---

## ✅ 1. `if` Statement
Executes a block of code **only if the condition is true**.

### ✔ Example
```js
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}
```

---

## ✅ 2. `if...else` Statement
Executes one block if the condition is true, otherwise another block.

### ✔ Example
```js
let marks = 40;

if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

## ✅ 3. `if...else if...else` Ladder
Used when you have **multiple conditions** to check.

### ✔ Example
```js
let score = 85;

if (score >= 90) {
  console.log("A Grade");
} else if (score >= 75) {
  console.log("B Grade");
} else if (score >= 50) {
  console.log("C Grade");
} else {
  console.log("Fail");
}
```

---

## ✅ 4. `switch` Statement
Used when comparing one value against multiple cases.

### ✔ Example
```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

---

## ⚡ Important: `break` in Switch
- Prevents falling into the next case  
- If missing → all cases below will run until a break is found

---

## 🌟 5. Ternary Operator (`? :`)
Short form of `if...else`.

### ✔ Example
```js
let age = 20;

let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
```

---

## 🌟 6. Nested Conditions
You can place one condition inside another.

### ✔ Example
```js
let user = "admin";
let loggedIn = true;

if (loggedIn) {
  if (user === "admin") {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
}
```

---

## ⭐ Bonus: Logical Operators in Decision Making  
- Use `&&` for **all conditions must be true**
- Use `||` for **any condition must be true**

### ✔ Example
```js
if (age >= 18 && country === "India") {
  console.log("Eligible");
}
```

---


