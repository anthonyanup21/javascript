# 📘 JavaScript Loops  
### while • for • do...while • break • continue

Loops allow us to run a block of code multiple times until a condition becomes false.

---

# 🔥 1. while Loop

### 📌 Syntax
```js
while (condition) {
    // code block
}
```

### ✔️ Condition checked BEFORE running the loop

### 📌 Example
```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

# 🔥 2. for Loop

### 📌 Syntax
```js
for (initialization; condition; increment) {
    // code block
}
```

### 📌 Example
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

# 🔥 3. do…while Loop

### ✔️ Runs at least **one time**
### ✔️ Condition checked AFTER the loop

### 📌 Example
```js
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

---

# 🔥 4. break Statement

`break` is used to **stop the loop immediately**, even if the condition is true.

### 📌 Example
```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // stops the loop
    }
    console.log(i);
}
```

**Output:**  
1  
2  
3  
4  

➡️ Loop stops at 5.

### 📌 Works the same in while and do-while:
```js
let i = 1;

while (i <= 10) {
    if (i === 4) break;
    console.log(i);
    i++;
}
```

---

# 🔥 5. continue Statement

`continue` skips the **current iteration** and moves to the **next iteration**.

### 📌 Example
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // skip 3
    }
    console.log(i);
}
```

**Output:**  
1  
2  
4  
5  

➡️ 3 is skipped.

### 📌 continue in while loop
```js
let i = 0;

while (i < 5) {
    i++;
    if (i === 3) continue;
    console.log(i);
}
```

---

# 🔥 6. Loop Comparison Table

| Feature | while | for | do…while |
|--------|-------|-----|-----------|
| Condition checked | Before | Before | After |
| Runs at least once | ❌ No | ❌ No | ✔️ Yes |
| Best used when | Unknown cycles | Known cycles | Run at least once |

---

# 🔥 7. break vs continue (Difference)

| Keyword | Meaning | Effect |
|---------|---------|--------|
| break | stop loop completely | Loop ends immediately |
| continue | skip current iteration | Goes to next iteration |

---

# 🎯 Final Summary

### ✔️ while → condition first  
### ✔️ for → best for counting loops  
### ✔️ do…while → always runs once  
### ✔️ break → stops loop  
### ✔️ continue → skips current iteration  

