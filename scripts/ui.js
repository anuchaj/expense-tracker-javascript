"use strict";

/**
 * UI module
 *
 * Responsible only for updating and managing
 * the visible interface.
 *
 * This module does NOT handle:
 * - Local Storage
 * - Expense creation logic
 * - Chart calculations
 *
 * app.js controls communication between modules.
 */


/**
 * Renders the expense table.
 *
 * @param {Array} expenses
 */
export function renderExpenses(expenses) {

    try {

        const tableBody = document.querySelector("#expenseTable");


        if (!tableBody) {

            throw new Error(
                "Expense table element was not found."
            );

        }


        // Clear existing rows.
        tableBody.innerHTML = "";


        // Display empty state.
        if (expenses.length === 0) {

            tableBody.innerHTML = `

                <tr>

                    <td colspan="5">

                        No expenses recorded.

                    </td>

                </tr>

            `;

            return;

        }


        /**
         * Create a table row
         * for every expense.
         *
         * Demonstrates map().
         */
        const rows = expenses.map(expense => {


            return `

                <tr>

                    <td>
                        ${formatDate(expense.date)}
                    </td>

                    <td>
                        ${expense.title}
                    </td>

                    <td>
                        ${expense.category}
                    </td>

                    <td>
                        ${formatCurrency(expense.amount)}
                    </td>

                    <td>

                        <button

                            class="delete-btn"

                            data-id="${expense.id}"

                        >

                            Delete

                        </button>

                    </td>

                </tr>

            `;


        });


        tableBody.innerHTML = rows.join("");


    }

    catch (error) {

        showMessage(
            error.message,
            "error"
        );

    }

}



/**
 * Updates the summary dashboard.
 *
 * @param {Object} expenseManager
 */
export function updateSummary(expenseManager) {


    try {


        const countElement =
            document.querySelector("#expenseCount");


        const totalElement =
            document.querySelector("#totalAmount");


        const largestElement =
            document.querySelector("#largestExpense");



        if (

            !countElement ||
            !totalElement ||
            !largestElement

        ) {

            throw new Error(
                "Summary elements were not found."
            );

        }



        countElement.textContent =
            expenseManager.getExpenseCount();



        totalElement.textContent =
            formatCurrency(
                expenseManager.getTotalAmount()
            );



        largestElement.textContent =
            formatCurrency(
                expenseManager.getLargestExpense()
            );


    }

    catch(error) {


        showMessage(
            error.message,
            "error"
        );


    }


}



/**
 * Populates category dropdown options.
 *
 * Used with categories generated
 * from recursion.js.
 *
 * @param {Array} categories
 */
export function populateCategories(categories) {


    try {


        const categorySelect =
            document.querySelector("#category");


        const filterSelect =
            document.querySelector("#filterCategory");



        if (!categorySelect || !filterSelect) {

            throw new Error(
                "Category dropdown elements not found."
            );

        }



        // Keep the filter default option.
        filterSelect.innerHTML = `

            <option value="all">

                All Categories

            </option>

        `;



        categorySelect.innerHTML = "";



        categories.forEach(category => {


            const option =
                document.createElement("option");


            option.value = category;

            option.textContent = category;


            categorySelect.appendChild(option);



            const filterOption =
                document.createElement("option");


            filterOption.value = category;

            filterOption.textContent = category;


            filterSelect.appendChild(filterOption);


        });


    }

    catch(error) {


        showMessage(
            error.message,
            "error"
        );


    }


}



/**
 * Displays temporary messages.
 *
 * @param {string} message
 * @param {string} type
 */
export function showMessage(message, type = "success") {


    const messageBox =
        document.querySelector("#messageBox");



    if (!messageBox) {

        return;

    }



    messageBox.textContent = message;


    messageBox.className =
        `message ${type}`;



    messageBox.classList.remove(
        "hidden"
    );



    setTimeout(() => {


        messageBox.classList.add(
            "hidden"
        );


    }, 3000);



}



/**
 * Clears the expense form.
 */
export function clearForm() {


    const form =
        document.querySelector("#expenseForm");


    if (form) {

        form.reset();

    }


    // Set today's date again.
    const dateInput =
        document.querySelector("#date");


    if (dateInput) {


        dateInput.value =
            new Date()
                .toISOString()
                .split("T")[0];

    }


}



/**
 * Formats currency values.
 *
 * @param {number} amount
 *
 * @returns {string}
 */
export function formatCurrency(amount) {


    return new Intl.NumberFormat(

        "en-US",

        {

            style: "currency",

            currency: "USD"

        }

    ).format(amount);


}



/**
 * Formats dates for display.
 *
 * @param {string} date
 *
 * @returns {string}
 */
export function formatDate(date) {


    try {


        return new Intl.DateTimeFormat(

            "en-US",

            {

                year: "numeric",

                month: "short",

                day: "numeric"

            }

        ).format(
            new Date(date)
        );


    }

    catch(error) {


        return date;


    }


}