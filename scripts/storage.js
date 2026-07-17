/**
 * ==========================================================
 * File: storage.js
 * Course: CSE 310 - Applied Programming
 * Project: Personal Expense Tracker
 *
 * Description:
 * This module handles all interactions with the browser's
 * Local Storage. It is responsible for saving and loading
 * expense data so that user information persists between
 * browser sessions.
 *
 * Features:
 * • Save expenses
 * • Load expenses
 * • Clear stored data
 * • Error handling
 * ==========================================================
 */

"use strict";

/**
 * Local Storage key used by the application.
 * Changing this value changes where data is stored.
 */
const STORAGE_KEY = "personalExpenseTracker";


/**
 * Saves the expense collection to Local Storage.
 *
 * @param {Array} expenses - Array of Expense objects.
 *
 * @throws {Error} If saving to Local Storage fails.
 */
export function saveExpenses(expenses) {

    try {

        const jsonData = JSON.stringify(expenses);

        localStorage.setItem(STORAGE_KEY, jsonData);

    }

    catch (error) {

        throw new Error(
            "Unable to save expense data."
        );

    }

}


/**
 * Loads all expenses from Local Storage.
 *
 * @returns {Array} Array of stored expenses.
 *
 * @throws {Error} If stored data cannot be read.
 */
export function loadExpenses() {

    try {

        const storedData = localStorage.getItem(STORAGE_KEY);

        // No saved data yet.
        if (storedData === null) {

            return [];

        }

        return JSON.parse(storedData);

    }

    catch (error) {

        throw new Error(
            "Unable to load saved expense data."
        );

    }

}


/**
 * Removes all stored expenses.
 *
 * Useful if a future "Reset Data" feature
 * is added to the application.
 */
export function clearExpenses() {

    try {

        localStorage.removeItem(STORAGE_KEY);

    }

    catch (error) {

        throw new Error(
            "Unable to clear saved expense data."
        );

    }

}


/**
 * Checks whether Local Storage currently
 * contains any saved expenses.
 *
 * @returns {boolean}
 *
 * Demonstrates a simple utility function that
 * can be used when initializing the application.
 */
export function hasStoredExpenses() {

    return localStorage.getItem(STORAGE_KEY) !== null;

}