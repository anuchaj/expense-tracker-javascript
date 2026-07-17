// ===========================================
// expenses.js
// Handles expense data and CRUD operations
// ===========================================

let expenses = [];

/**
 * Returns all expenses.
 * @returns {Array}
 */
export function getExpenses() {
    return expenses;
}

/**
 * Creates a new expense object and stores it.
 * @param {string} title
 * @param {number} amount
 * @param {string} category
 * @param {string} date
 */
export function addExpense(title, amount, category, date) {

    const expense = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
        date
    };

    expenses.push(expense);

    return expense;
}

/**
 * Removes an expense by ID.
 * @param {number} id
 */
export function deleteExpense(id) {

    expenses = expenses.filter(expense => expense.id !== id);

}

/**
 * Finds an expense.
 * @param {number} id
 * @returns {Object}
 */
export function findExpense(id) {

    return expenses.find(expense => expense.id === id);

}

/**
 * Returns total amount spent.
 */
export function getTotalAmount() {

    return expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

}

/**
 * Returns the largest expense.
 */
export function getLargestExpense() {

    if (expenses.length === 0)
        return 0;

    return expenses.reduce(
        (largest, expense) =>
            expense.amount > largest.amount
                ? expense
                : largest
    ).amount;

}

/**
 * Returns number of expenses.
 */
export function getExpenseCount() {

    return expenses.length;

}

/**
 * Replaces all expenses.
 * Used later by Local Storage.
 */
export function setExpenses(data) {

    expenses = data;

}