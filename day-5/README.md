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
