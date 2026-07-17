/**
 * ==========================================================
 * File: expenses.js
 * Course: CSE 310 - Applied Programming
 * Project: Personal Expense Tracker
 *
 * Description:
 * This module manages all expense data used by the
 * application. It is responsible for:
 *
 * • Creating expenses
 * • Editing expenses
 * • Deleting expenses
 * • Filtering expenses
 * • Sorting expenses
 * • Calculating statistics
 *
 * This module intentionally demonstrates:
 * - Classes
 * - Objects
 * - Arrays
 * - ES6 array functions
 * - Exception handling
 * ==========================================================
 */

import { saveExpenses } from "./storage.js";

/**
 * Represents a single expense.
 */
export class Expense {

    /**
     * Creates a new expense.
     *
     * @param {number} id
     * @param {string} title
     * @param {number} amount
     * @param {string} category
     * @param {string} date
     */
    constructor(id, title, amount, category, date) {

        this.id = id;
        this.title = title;
        this.amount = Number(amount);
        this.category = category;
        this.date = date;

    }

}

/**
 * Manages the application's expense collection.
 */
export class ExpenseManager {

    constructor() {

        /**
         * Stores every expense object.
         * @type {Expense[]}
         */
        this.expenses = [];

    }

    /**
    * Replaces the current expense collection.
    *
    * Plain objects loaded from Local Storage are
    * converted back into Expense objects.
    *
    * @param {Array} expenses
    */
    setExpenses(expenses) {

        this.expenses = expenses.map(expense =>

            new Expense(

                expense.id,

                expense.title,

                expense.amount,

                expense.category,

                expense.date

            )

        );

    }

    /**
     * Returns all expenses.
     *
     * @returns {Expense[]}
     */
    getExpenses() {

        return this.expenses;

    }

    /**
     * Creates and stores a new expense.
     *
     * @param {string} title
     * @param {number} amount
     * @param {string} category
     * @param {string} date
     *
     * @returns {Expense}
     */
    addExpense(title, amount, category, date) {

        const expense = new Expense(

            Date.now(),

            title,

            amount,

            category,

            date

        );

        this.expenses.push(expense);

        saveExpenses(this.expenses);

        return expense;

    }

    /**
     * Updates an existing expense.
     *
     * Demonstrates ES6 find().
     *
     * @param {number} id
     * @param {string} title
     * @param {number} amount
     * @param {string} category
     * @param {string} date
     */
    editExpense(id, title, amount, category, date) {

        const expense = this.expenses.find(

            expense => expense.id === id

        );

        if (!expense) {

            throw new Error("Expense not found.");

        }

        expense.title = title;
        expense.amount = Number(amount);
        expense.category = category;
        expense.date = date;

        saveExpenses(this.expenses);

    }

    /**
     * Deletes an expense.
     *
     * Demonstrates ES6 filter().
     *
     * @param {number} id
     */
    deleteExpense(id) {

        this.expenses = this.expenses.filter(

            expense => expense.id !== id

        );

        saveExpenses(this.expenses);

    }

    /**
     * Finds an expense.
     *
     * Demonstrates ES6 find().
     *
     * @param {number} id
     *
     * @returns {Expense}
     */
    findExpense(id) {

        return this.expenses.find(

            expense => expense.id === id

        );

    }

    /**
     * Filters expenses by category.
     *
     * Demonstrates ES6 filter().
     *
     * @param {string} category
     *
     * @returns {Expense[]}
     */
    filterExpenses(category) {

        if (category === "all") {

            return this.expenses;

        }

        return this.expenses.filter(

            expense => expense.category === category

        );

    }

    /**
     * Sorts expenses.
     *
     * Demonstrates ES6 sort().
     *
     * @param {string} type
     */
    sortExpenses(type) {

        switch (type) {

            case "low":

                this.expenses.sort(

                    (a, b) => a.amount - b.amount

                );

                break;

            case "high":

                this.expenses.sort(

                    (a, b) => b.amount - a.amount

                );

                break;

            case "alpha":

                this.expenses.sort(

                    (a, b) =>

                        a.title.localeCompare(b.title)

                );

                break;

            default:

                this.expenses.sort(

                    (a, b) =>

                        new Date(b.date) - new Date(a.date)

                );

        }

    }

    /**
     * Calculates the total amount spent.
     *
     * Demonstrates ES6 reduce().
     *
     * @returns {number}
     */
    getTotalAmount() {

        return this.expenses.reduce(

            (sum, expense) =>

                sum + expense.amount,

            0

        );

    }

    /**
     * Returns the largest expense.
     *
     * Demonstrates ES6 reduce().
     *
     * @returns {number}
     */
    getLargestExpense() {

        if (this.expenses.length === 0) {

            return 0;

        }

        return this.expenses.reduce(

            (largest, expense) =>

                expense.amount > largest.amount

                    ? expense

                    : largest

        ).amount;

    }

    /**
     * Calculates the average expense.
     *
     * Demonstrates ES6 reduce().
     *
     * @returns {number}
     */
    getAverageExpense() {

        if (this.expenses.length === 0) {

            return 0;

        }

        return this.getTotalAmount() /

            this.expenses.length;

    }

    /**
     * Returns the number of expenses.
     *
     * @returns {number}
     */
    getExpenseCount() {

        return this.expenses.length;

    }

    /**
     * Determines whether a category
     * contains at least one expense.
     *
     * Demonstrates ES6 some().
     *
     * @param {string} category
     *
     * @returns {boolean}
     */
    hasExpenses(category) {

        return this.expenses.some(

            expense =>

                expense.category === category

        );

    }

}