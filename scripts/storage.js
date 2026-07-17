// ===============================
// storage.js
// ===============================

const STORAGE_KEY = "expenseTracker";

/**
 * Save expenses.
 */
export function saveExpenses(expenses) {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(expenses)

    );

}

/**
 * Load expenses.
 */
export function loadExpenses() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data)

        return [];

    return JSON.parse(data);

}