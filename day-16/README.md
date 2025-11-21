# ⚡ ES6 Features — Default Parameters, Spread Operator, Rest Parameter, Destructuring  
### (Beginner-Friendly README)

ES6 (ECMAScript 2015) introduced several powerful features that make JavaScript easier and cleaner.  
Here are the 4 most commonly used ones.

---

# 🟦 1. Default Parameters

Default parameters allow you to set **default values** for function arguments.

### Without ES6:
```js
function greet(name) {
  name = name || "Guest";
  console.log("Hello", name);
}

greet(); // Hello Guest
```

### With ES6:
```js
function greet(name = "Guest") {
  console.log("Hello", name);
}

greet();        // Hello Guest
greet("Anup");  // Hello Anup
```

✔ Makes code cleaner  
✔ Avoids undefined values  

---

# 🟩 2. Spread Operator (`...`)

Spread means **expand** or **unpack** elements.  
It is used with arrays and objects.

### 📌 Spread in arrays
```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]
```

### 📌 Spread in objects
```js
let user = { name: "Anup", age: 21 };
let updatedUser = { ...user, city: "Mysore" };

console.log(updatedUser);
```

✔ Used to copy arrays/objects  
✔ Merge arrays/objects  
✔ Avoids mutation  

---

# 🟧 3. Rest Parameter (`...`)

Rest parameter **collects** multiple arguments into a single array.

### Example:
```js
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(10, 20, 30)); // 60
```

✔ Always returns a **real array**  
✔ Can take unlimited arguments  
✔ Works only at the end of parameters

---

# 🟨 4. Destructuring

Destructuring allows you to extract values from arrays or objects in a clean way.

---

## 📌 Array Destructuring
```js
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a, b, c); // 10 20 30
```

### Skip elements
```js
let [x, , y] = [1, 2, 3];
console.log(x, y); // 1 3
```

---

## 📌 Object Destructuring
```js
let user = {
  firstName: "Anup",
  age: 21,
  city: "Mysore"
};

let { firstName, age } = user;

console.log(firstName, age); // Anup 21
```

### Rename variables
```js
let { firstName: name } = user;
console.log(name);
```

### Default values
```js
let { country = "India" } = user;
console.log(country); // India
```


###  Nested Object Destructuring
```js
let user = {
  firstName: "Anup",
  age: 21,
  address: {
    city: "Mysore",
    country: "India"
  }
};

const {address:{city,country}}=user
console.log(city)//Mysore
```
---

# ⭐ Summary Table

| Feature | Symbol | Purpose |
|--------|--------|----------|
| **Default Parameter** | `=` | Set default function arguments |
| **Spread Operator** | `...` | Expand arrays/objects |
| **Rest Parameter** | `...` | Collect arguments into an array |
| **Destructuring** | `{}`, `[]` | Extract values from arrays/objects |

---

# 🎯 Final One-Line Definitions

- **Default parameter** → Function arguments with fallback values  
- **Spread operator** → Expands arrays/objects  
- **Rest parameter** → Gathers multiple values into an array  
- **Destructuring** → Extract values into variables cleanly  

