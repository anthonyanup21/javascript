# 🧠 Functions vs Methods in JavaScript 

In JavaScript, both **functions** and **methods** are blocks of code that perform actions.  
The difference depends on **how** and **where** they are used.

---

# 🔹 What is a Function?

A **function** is a standalone block of code that can be reused anywhere.

### Example:
```js
function sayHello() {
  console.log("Hello!");
}

sayHello(); // Calling the function
```

✔ Not inside an object  
✔ Called directly  
✔ General-purpose code

---

# 🔹 What is a Method?

A **method** is a function that is **inside an object**.

### Example:
```js
const user = {
  name: "Anup",
  greet: function() {
    console.log("Hello from method!");
  }
};

user.greet(); // Calling the method
```

✔ The function is **inside an object**  
✔ When a function belongs to an object → it is called a **method**  
✔ Methods usually work with object data

---

# 📌 Example Showing The Difference

```js
function add(a, b) {
  return a + b;   // function
}

const math = {
    add:function (a,b){
        return a+b;  //method (old way of writing method)
    },
    multiply(a, b) {
        return a * b; // method (new way of writing method)
    }
};
```

- `add()` → **Function**
- `math.multiply()` → **Method**

---

# ⭐ Summary

| Term | Meaning | Example |
|------|---------|----------|
| **Function** | Standalone block of code | `sayHello()` |
| **Method** | Function inside an object | `user.greet()` |

---

# 🎯 Final Understanding

> **All methods are functions,  
> but not all functions are methods.**  
>  
> A function becomes a method **only when it is stored inside an object.**







# ⚡ Arrow Functions in JavaScript 

Arrow functions are a **shorter** and **cleaner** way to write functions in JavaScript.  
They were introduced in ES6 and are commonly used in modern JS.

---

# 🔹 1. Basic Arrow Function

### Normal function:
```js
function add(a, b) {
  return a + b;
}
```

### Arrow function:
```js
const add = (a, b) => {
  return a + b;
};
```

✔ Shorter  
✔ Cleaner  
✔ Uses `=>` (arrow)

---

# 🔹 2. Arrow Function with Implicit Return

If there is **only one line**, you can skip `{}` and `return`.

```js
const add = (a, b) => a + b;
```

✔ Automatically returns the value  (implisit return)
✔ Best for simple calculations

---

# 🔹 3. Arrow Function with One Parameter

If there is only **one parameter**, parentheses are optional.

```js
const square = x => x * x;
```

---

# 🔹 4. Arrow Function with No Parameters

Use empty parentheses:

```js
const greet = () => console.log("Hello!");
```

---

# 🔹 5. Arrow Functions Do NOT Have `this` (Important)

Arrow functions **do not** have their own `this`.  
They use the `this` value from their **parent scope** (lexical `this`).

Example:
```js
const user = {
  name: "Anup",
  showName: () => {
    console.log(this.name);
  }
};

user.showName(); // undefined (not "Anup")
```

✔ Arrow functions are **not good** as object methods  
✔ Use normal functions inside objects

---

# 🔹 6. Arrow Functions Cannot Be Used For:

❌ As object methods (because they don’t have `this`)  
❌ As constructors (cannot use `new`)  
❌ To bind or change `this`

---

# 🧪 Examples

### Multi-line arrow function:
```js
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

### Arrow function inside setTimeout:
```js
setTimeout(() => console.log("Hello!"), 2000);
```

---

# ⭐ Summary

| Feature | Arrow Function |
|--------|----------------|
| Short syntax | ✔ Yes |
| Implicit return | ✔ Yes |
| Own `this` | ❌ No |
| Good for callbacks | ✔ Yes |
| Good for object methods | ❌ No |
| Good for simple logic | ✔ Yes |

---

# 🎯 Final Understanding

> Arrow functions are shorter and cleaner versions of normal functions,  
> but they do **not** have their own `this`, so they behave differently inside objects.






