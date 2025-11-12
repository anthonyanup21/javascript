# 🧠 JavaScript Dialog Boxes — Alert, Prompt & Confirm

Today I learned about the **three built-in dialog boxes** in JavaScript:  
`alert()`, `prompt()`, and `confirm()`.

---

## 🔹 1. alert()

**Purpose:**  
Used to display a simple message to the user.

**Syntax:**
```js
alert("This is an alert message!");
```

**Example:**
```js
alert("Welcome to my website!");
```

**Notes:**
- Only shows an **OK** button.  
- Used to **inform** the user — doesn’t take input.

---

## 🔹 2. prompt()

**Purpose:**  
Used to **take input** from the user.

**Syntax:**
```js
let userInput = prompt("Enter your name:");
```

**Example:**
```js
let name = prompt("What is your name?");
alert("Hello, " + name + "!");
```

**Notes:**
- Shows a text field + **OK** and **Cancel** buttons.  
- Returns:
  - The entered text (if OK is clicked)  
  - `null` (if Cancel is clicked)

---

## 🔹 3. confirm()

**Purpose:**  
Used to **ask for confirmation** (Yes/No type question).

**Syntax:**
```js
let result = confirm("Are you sure?");
```

**Example:**
```js
let isConfirmed = confirm("Do you want to delete this file?");
if (isConfirmed) {
  alert("File deleted successfully!");
} else {
  alert("Action canceled.");
}
```

**Notes:**
- Shows **OK** and **Cancel** buttons.  
- Returns:
  - `true` → if OK is clicked  
  - `false` → if Cancel is clicked

---

## 💡 Summary Table

| Function   | Takes Input | Returns Value | Buttons Shown | Common Use |
|-------------|--------------|----------------|----------------|-------------|
| `alert()`   | ❌ No        | `undefined`    | OK             | Show message |
| `prompt()`  | ✅ Yes       | String / null  | OK, Cancel     | Get user input |
| `confirm()` | ❌ No        | true / false   | OK, Cancel     | Ask for confirmation |

---

## 🧩 Practice Section

Try these small challenges to understand better 👇

### 1. Greeting Program
```js
let user = prompt("Enter your name:");
alert("Hello " + user + "! Welcome!");
```

### 2. Confirmation Example
```js
let leave = confirm("Do you want to exit this page?");
if (leave) {
  alert("Goodbye!");
} else {
  alert("Glad you stayed!");
}
```

### 3. Mini Calculator
```js
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
alert("The sum is: " + (Number(a) + Number(b)));
```

---

✅ **Conclusion:**  
These dialog boxes are simple but useful for quick user interactions.  
However, in **modern web development**, developers often use **custom modals** (built using HTML, CSS, and JavaScript) for better design and flexibility.
