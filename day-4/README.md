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
