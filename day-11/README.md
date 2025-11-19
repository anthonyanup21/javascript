# 🧠 Higher-Order Functions & Callback Functions in JavaScript

## 🔹 What Are Higher-Order Functions?
A **higher-order function (HOF)** is a function that:
- **Takes another function as an argument**, or  
- **Returns a function**

JavaScript allows this because **functions are objects behind the scenes**.

### ✅ Example
```js
function a(b) {
    console.log('Hello');
    b(); // calling the function passed as argument
}

function sayHi() {
    console.log('World');
}

a(sayHi); 
// Here, 'a' is a higher-order function
```

---

## 🔹 What Are Callback Functions?
A **callback function** is a function that is:
- **Passed as an argument to another function**, and  
- **Executed inside that function**

### ✅ Example
```js
function a(b) {
    console.log('Hello');
    b(); // executing the callback
}

function sayHi() {
    console.log('World');
}

a(sayHi); 
// Here, 'sayHi' is a callback function
```

---

## ⭐ Summary Table

| Concept | Meaning | Example |
|--------|---------|---------|
| **Higher-Order Function** | Accepts another function OR returns a function | `a(sayHi)` → `a` is HOF |
| **Callback Function** | Function passed as argument to another function | `sayHi` is callback |

---

## 💡 Key Point
JavaScript treats functions as **first-class citizens**, meaning they can be:
- Stored in variables  
- Passed as arguments  
- Returned from functions  
- Added inside objects  

This is why higher-order functions and callbacks work!







# ⏱️ JavaScript Timers – setTimeout, Timer ID, Arguments & setInterval

## 🔹 setTimeout()
`setTimeout()` is used to run a function **after a specific number of milliseconds**.

### ✅ Syntax
```js
setTimeout(callbackFunction, timeInMilliseconds)
```

### Example
```js
const timeId = setTimeout(function () {
    console.log("hello");
});
```

---

## 🔹 What Does setTimeout Return?
`setTimeout()` **returns a Timer ID**.

- This ID helps you identify which timeout is running  
- You can use this ID to **cancel** the timeout using `clearTimeout()`

### Example
```js
const timeId = setTimeout(() => console.log("hello"), 2000);

clearTimeout(timeId); // cancels the timeout
```

---

## 🔹 Passing Arguments to setTimeout()
Anything you pass **after the time** is automatically sent to the callback function as arguments.

### Example
```js
function a() {
    console.log("hello");
    console.log(arguments);
}

setTimeout(a, 3000, "anup", "hello", "how");
// Output after 3 seconds:
// hello
// ["anup", "hello", "how"]
```

⚠️ Using `arguments` this way is **deprecated**, so modern JS prefers using arrow functions.

---

## 🔹 setInterval()
`setInterval()` repeatedly runs a function **after every given time interval**.

### Example
```js
function b() {
    console.log("hello world");
}

setInterval(b, 2000);
// Prints "hello world" every 2 seconds
```

### ❌ To stop it:
```js
const id = setInterval(b, 2000);
clearInterval(id);
```

---

## ⭐ Summary

| Function | Purpose | Returns | Stops With |
|---------|---------|---------|------------|
| **setTimeout()** | Runs once after given time | Timer ID | `clearTimeout(id)` |
| **setInterval()** | Runs repeatedly at interval | Timer ID | `clearInterval(id)` |
| **Arguments in setTimeout** | Passed after delay | Deprecated | – |

---







