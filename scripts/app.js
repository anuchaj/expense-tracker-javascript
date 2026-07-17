import {

    addExpense,

    deleteExpense

} from "./expenses.js";


import {

    renderExpenses,

    updateSummary,

    clearForm,

    showError,

    showSuccess

} from "./ui.js";


import {

    loadExpenses

} from "./storage.js";

import {

    setExpenses

} from "./expenses.js";


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

setExpenses(loadExpenses());

renderExpenses(handleDelete);

updateSummary();