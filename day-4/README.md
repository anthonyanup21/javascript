# 🧠 JavaScript String Methods and Properties

Before learning about string methods and properties, it’s important to understand that **strings are indexed**.  
This means we can access individual characters in a string using their index number.

---

## 🔹 Example

**Expression:**
```js
"Hello World"[1]
```

**Result:**
```js
"e"
```

---

## 🔸 String Property

There is **only one property** for strings in JavaScript:

- `length`

**Example:**
```js
let text = "JavaScript";
console.log(text.length); // 10
```

---

## 🔹 String Methods (Without Arguments)

These methods don’t require any parameters.

- `toUpperCase()`
- `toLowerCase()`
- `trim()`
- `trimStart()`
- `trimEnd()`

**Examples:**
```js
let str = "  hello world  ";

console.log(str.toUpperCase());  // "  HELLO WORLD  "
console.log(str.toLowerCase());  // "  hello world  "
console.log(str.trim());         // "hello world"
console.log(str.trimStart());    // "hello world  "
console.log(str.trimEnd());      // "  hello world"
```

---

## 🔹 String Methods (With Arguments)

These methods need parameters to perform operations.

- `includes()`
- `indexOf()`
- `replace()`
- `replaceAll()`
- `concat()`
- `padStart()`
- `padEnd()`
- `charAt()`
- `charCodeAt()`
- `split()`

**Examples:**
```js
let text = "JavaScript is awesome";

console.log(text.includes("Script"));      // true
console.log(text.indexOf("is"));           // 11
console.log(text.replace("awesome", "fun")); // "JavaScript is fun"
console.log(text.concat("!"));             // "JavaScript is awesome!"
console.log("5".padStart(3, "*"));         // "**5"
console.log("5".padEnd(3, "*"));           // "5**"
console.log(text.charAt(0));               // "J"
console.log(text.charCodeAt(0));//gives ascii code           // 74
console.log(text.split(" "));              // ["JavaScript", "is", "awesome"]
```


## 🧱 Template Literals (ES6 Feature)

**Template Literals** are a modern way to create strings, introduced in **ES6**.  
They make string formatting and multiline strings easier and more readable.

**Syntax:**
```js
`string text ${expression} string text`
```

**Examples:**
```js
let name = "John";
let age = 22;

// Old way
console.log("My name is " + name + " and I am " + age + " years old.");

// Using Template Literals
console.log(`My name is ${name} and I am ${age} years old.`);
```

---

## 📘 Learn More

To explore more string methods and properties, visit:  
👉 [W3Schools - JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)

---

✅ **Conclusion:**  
Strings in JavaScript are powerful and flexible.  
By using **string methods** and the **length property**, you can easily manipulate and extract data from text.





# 🧮 JavaScript Math Object & Number Behavior

Today I learned about the **Math object** and how JavaScript handles numbers, random values, and special cases like `NaN` and `Infinity`.

---

## 🔹 Math Object in JavaScript

The **Math object** in JavaScript provides built-in methods for performing mathematical operations such as rounding, generating random numbers, and more.

---

## 🔸 Common Math Methods

### 1. `Math.round()`
Rounds a number to the **nearest integer**.

```js
console.log(Math.round(1.9)); // 2
```

---

### 2. `Math.ceil()`
Rounds a number **upward** to the nearest integer.

```js
console.log(Math.ceil(1.01)); // 2
```

---

### 3. `Math.floor()`
Rounds a number **downward** to the nearest integer.

```js
console.log(Math.floor(1.9)); // 1
```

---

### 4. `Math.sqrt()`
Returns the **square root** of a number.

```js
console.log(Math.sqrt(25)); // 5
```

---

### 5. `Math.random()`
Generates a random **decimal number** between `0` (inclusive) and `1` (exclusive).

To get a random **integer** between 0 and 100:

```js
console.log(Math.floor(Math.random() * 101)); // any number between 0–100
```

---

## 🔹 Generating Random Numbers in a Range

You can create a custom function to generate random integers within any range.

```js
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(10, 50)); // gives random number between 10 and 50
```

---

## 🔸 Special Number Values

### 1. `NaN` (Not a Number)
Occurs when a mathematical operation fails or produces an undefined result.

```js
console.log(0 / 0); // NaN
```

---

### 2. `Infinity` and `-Infinity`
JavaScript represents numbers beyond finite limits using `Infinity` and `-Infinity`.

```js
console.log(8 / 0);  // Infinity
console.log(-8 / 0); // -Infinity
```

---

## 🔹 Type Conversion in Mathematical Operations

JavaScript automatically converts **strings** to **numbers** when using mathematical operators (except the `+` operator).

---

### 1. Multiplication
```js
console.log("1" * "2"); // 2 → type: number
```

### 2. Addition
```js
console.log("1" + "2"); // "12" → type: string (concatenation)
```

### 3. Subtraction
```js
console.log("1" - "2"); // -1 → type: number
```

### 4. Division
```js
console.log("1" / "2"); // 0.5 → type: number
```

---


