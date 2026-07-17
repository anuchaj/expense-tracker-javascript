// =======================================
// ui.js
// Handles updating the interface
// =======================================

import {
    getExpenses,
    getExpenseCount,
    getLargestExpense,
    getTotalAmount
} from "./expenses.js";

/**
 * Draws all expenses.
 */
export function renderExpenses(deleteHandler) {

    const table = document.querySelector("#expenseTable");

    table.innerHTML = "";

    const expenses = getExpenses();

    if (expenses.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center">
                No expenses added yet.
            </td>
        </tr>
        `;

        return;

    }

    expenses.forEach(expense => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${expense.date}</td>

            <td>${expense.title}</td>

            <td>${expense.category}</td>

            <td>$${expense.amount.toFixed(2)}</td>

            <td>

                <button
                    class="delete-btn"
                    data-id="${expense.id}">

                    Delete

                </button>

            </td>

        `;

        table.appendChild(row);

    });

    document.querySelectorAll(".delete-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                deleteHandler(Number(button.dataset.id));

            });

        });

}

/**
 * Updates summary cards.
 */
export function updateSummary() {

    document.querySelector("#expenseCount").textContent =
        getExpenseCount();

    document.querySelector("#totalAmount").textContent =
        `$${getTotalAmount().toFixed(2)}`;

    document.querySelector("#largestExpense").textContent =
        `$${getLargestExpense().toFixed(2)}`;

}

/**
 * Clears the form.
 */
export function clearForm() {

    document.querySelector("#expenseForm").reset();

}

/**
 * Displays an error.
 */
export function showError(message) {

    const box = document.querySelector("#messageBox");

    box.className = "message error";

    box.textContent = message;

    setTimeout(() => {

        box.className = "message hidden";

    }, 3000);

}

export function showSuccess(message) {

    const box = document.querySelector("#messageBox");

    box.className = "message success";

    box.textContent = message;

    setTimeout(() => {

        box.className = "message hidden";

    }, 2000);

}