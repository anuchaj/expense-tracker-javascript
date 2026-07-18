# Personal Expense Tracker (JavaScript)

## Overview

The Personal Expense Tracker is a web-based application built using HTML, CSS, and JavaScript. The application allows users to record, organize, and analyze their daily expenses through an intuitive interface.

Users can:

- Add new expenses.
- Assign expenses to categories.
- View total spending.
- View the largest expense.
- Filter expenses by category.
- Sort expenses by date, amount, or alphabetical order.
- Delete expenses.
- View spending patterns through a visual chart.
- Save expense records permanently using browser Local Storage.

This project demonstrates practical usage of modern JavaScript programming concepts including variables, expressions, conditionals, loops, functions, objects, arrays, event handling, DOM manipulation, ES6 modules, recursion, and third-party JavaScript libraries.

---

# Purpose

The purpose of creating this application was to develop a practical understanding of JavaScript programming while building a useful real-world application.

This project demonstrates how JavaScript can be used to create interactive web applications that manage user data, respond to events, manipulate the DOM, and store information locally within the browser.

The project also fulfills the JavaScript module requirements by demonstrating:

- ES6 native array methods.
- Recursive programming.
- Use of a third-party JavaScript library.
- Persistent data storage.
- Modular JavaScript development.

---

# Features

## Expense Management

The application allows users to:

- Create expenses with:
  - Expense name.
  - Amount.
  - Category.
  - Date.

- Delete existing expenses.
- Automatically calculate:
  - Total expenses.
  - Number of expenses.
  - Largest expense.

---

## Expense Filtering and Sorting

Users can organize expense information by:

- Filtering expenses by category.
- Sorting expenses by:
  - Date.
  - Lowest amount.
  - Highest amount.
  - Alphabetical order.

---

## Local Storage

The application uses browser Local Storage to save expense information.

This allows users to:

- Close the browser.
- Refresh the page.
- Return later.

Their expense records remain available.

---

## Data Visualization

The application uses the Chart.js JavaScript library to display expenses by category.

The doughnut chart provides a visual summary of spending habits and updates automatically whenever expense data changes.

---

# JavaScript Concepts Demonstrated

## ES6 Array Methods

The application demonstrates several native JavaScript array methods:

### map()

Used for:

- Generating expense table rows.
- Processing category data.

### filter()

Used for:

- Searching expenses by category.
- Removing deleted expenses.

### reduce()

Used for:

- Calculating total expenses.
- Finding expense summaries.

### find()

Used for:

- Locating individual expenses.

### some()

Used for:

- Checking whether a category contains expenses.

---

## Recursion

A recursive function was implemented to navigate the nested category structure.

The recursion functionality:

- Searches category groups.
- Extracts available expense categories.
- Demonstrates how recursive functions can process hierarchical data.

---

## Modular JavaScript

The application is organized into separate modules:

- scripts/

- app.js

- expenses.js

- storage.js

- categories.js

- recursion.js

- charts.js

- ui.js

Each module has a specific responsibility:

- `app.js` - Application controller.
- `expenses.js` - Expense data management.
- `storage.js` - Local Storage operations.
- `categories.js` - Expense category structure.
- `recursion.js` - Recursive category processing.
- `charts.js` - Chart.js visualization.
- `ui.js` - DOM updates and user interface handling.

---

# Software Demo Video

A demonstration video showing the application running and explaining the code structure is available below:

[Software Demo Video](Not pasted HERE)

---

# Development Environment

## Tools Used

The following tools were used to develop this application:

- Visual Studio Code
- Google Chrome Browser
- Git and GitHub
- Chart.js Library

---

## Programming Languages

This project was developed using:

- HTML5
- CSS3
- JavaScript ES6

---

# Installation and Running the Application

1. Clone the repository:
   git clone https://github.com/anuchaj/expense-tracker-javascript.git

2. Open the project folder in Visual Studio Code.

3. Open `index.html` using a local development server.

Recommended:

- Live Server extension for Visual Studio Code.

4. Begin adding and managing expenses.

---

# Project Structure

expense-tracker-javascript/

│
├── index.html
│
├── styles/
│ └── styles.css
│
└── scripts/

    ├── app.js
    ├── expenses.js
    ├── storage.js
    ├── categories.js
    ├── recursion.js
    ├── charts.js
    └── ui.js

---

# Useful Websites

The following resources were helpful during development:

- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

- [JavaScript Local Storage Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

- [JavaScript Modules Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- [GitHub Documentation](https://docs.github.com/)

---

# Author

Joseph Anucha

CSE 310 - JavaScript Module Project
