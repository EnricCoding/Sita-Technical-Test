# HTTP Request Concurrency Control

## Overview

This project provides two core functionalities:

1. **Concurrency-Controlled HTTP Requests** – An optimized function for handling API requests while enforcing a `MAX_CONCURRENCY` limit.

## 🛠️ Tech Stack

- **Language:** TypeScript (ESNext)
- **Testing:** Jest
- **Package Manager:** npm
- **Module System:** CommonJS

---

## 📂 Project Structure

```
📂 project-root/
├── 📂 src/                        # Source files
│   ├── fetchConcurrency.ts        # Concurrency-controlled HTTP requests
│   ├── index.ts                   # Entry point to test functionalities
├── 📂 tests/                      # Unit tests
│   ├── fetchConcurrency.test.ts   # Tests for fetchConcurrency
├── package.json                   # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── jest.config.js                  # Jest configuration
├── README.md                      # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/EnricCoding/Sita-Technical-Test.git
cd Sita-Technical-Test
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Compile the Code

Ensure everything works correctly by running:

```sh
npx tsc
```

---

### 4️⃣ Run the code

After compiling, execute the main file with Node.js:

```sh
node dist/src/index.js
```

---

### 5️⃣ Run Tests

Ensure everything works correctly by running:

```sh
npx jest
```

---


## Testing

This project includes **unit tests** with Jest.

### 1️⃣ Run All Tests

```sh
npx jest
```

---

## I try to follow this:

✅ **TypeScript Best Practices** – Strict typing, modular functions.  
✅ **SOLID Principles** – Code is maintainable, scalable, and testable.  
✅ **Error Handling** – No unhandled promise rejections or crashes.  
✅ **Performance Optimizations** – Minimal operations, memory-efficient logic.  

---   
