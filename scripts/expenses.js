// ===========================================
// expenses.js
// Handles expense data and CRUD operations
// ===========================================

import {

saveExpenses

} from "./storage.js";

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
    saveExpenses(expenses);

    return expense;
}

/**
 * Removes an expense by ID.
 * @param {number} id
 */
export function deleteExpense(id) {

    expenses = expenses.filter(expense => expense.id !== id);
    saveExpenses(expenses);

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


export function filterExpenses(category) {

    if (category === "all")

        return expenses;

    return expenses.filter(

        expense => expense.category === category

    );

}

export function sortExpenses(type) {

    switch(type){

        case "low":

            expenses.sort(

                (a,b)=>a.amount-b.amount

            );

            break;

        case "high":

            expenses.sort(

                (a,b)=>b.amount-a.amount

            );

            break;

        case "alpha":

            expenses.sort(

                (a,b)=>

                    a.title.localeCompare(b.title)

            );

            break;

        default:

            expenses.sort(

                (a,b)=>

                    new Date(b.date)-new Date(a.date)

            );

    }

}