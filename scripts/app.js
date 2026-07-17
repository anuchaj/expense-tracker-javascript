import { addExpense, deleteExpense } from "./expenses.js";

import {

    renderExpenses,

    updateSummary,

    clearForm,

    showError,

    showSuccess

} from "./ui.js";


import { loadExpenses } from "./storage.js";

import { setExpenses } from "./expenses.js";

import { flattenCategories } from "./recursion.js";

import { initializeChart, updateChart } from "./charts.js";

import { getExpenses } from "./expenses.js";


const form = document.querySelector("#expenseForm");

form.addEventListener("submit", event => {

    event.preventDefault();

    const title =
        document.querySelector("#title").value.trim();

    const amount =
        Number(document.querySelector("#amount").value);

    const category =
        document.querySelector("#category").value;

    const date =
        document.querySelector("#date").value;

    try {

        validateExpense(
            title,
            amount,
            date
        );

        addExpense(
            title,
            amount,
            category,
            date
        );

        showSuccess("Expense added successfully.");

        setExpenses(loadExpenses());

        renderExpenses(handleDelete);

        updateSummary();

        clearForm();

    }

    catch (error) {

        showError(error.message);

    }

});

function handleDelete(id) {

    deleteExpense(id);

    setExpenses(loadExpenses());

    renderExpenses(handleDelete);

    updateSummary();

}

function validateExpense(
    title,
    amount,
    date
) {

    if (title.length === 0)
        throw new Error(
            "Expense title cannot be empty."
        );

    if (Number.isNaN(amount))
        throw new Error(
            "Amount must be numeric."
        );

    if (amount <= 0)
        throw new Error(
            "Amount must be greater than zero."
        );

    if (date === "")
        throw new Error(
            "Please select a date."
        );

}

/**
 * Populates both category dropdowns.
 * Categories are generated recursively.
 */
function populateCategories() {

    const categorySelect =
        document.querySelector("#category");

    const filterSelect =
        document.querySelector("#filterCategory");

    const categories =
        flattenCategories();

    categorySelect.innerHTML = "";

    filterSelect.innerHTML =
        `<option value="all">All Categories</option>`;

    categories.forEach(category => {

        categorySelect.innerHTML +=
            `<option>${category}</option>`;

        filterSelect.innerHTML +=
            `<option>${category}</option>`;

    });

}

// setExpenses(loadExpenses());
// populateCategories();

initializeChart();

renderExpenses(handleDelete);

updateSummary();

updateChart(getExpenses());