"use strict";


/*
    Main Application Controller

    Responsibilities:

    - Initialize the application.
    - Connect all modules.
    - Handle user events.
    - Coordinate data flow.

*/


import { ExpenseManager } from "./expenses.js";

import {

    loadExpenses

} from "./storage.js";


import {

    flattenCategories

} from "./recursion.js";


import {

    initializeChart,

    updateChart

} from "./charts.js";


import {

    renderExpenses,

    updateSummary,

    populateCategories,

    showMessage,

    clearForm

} from "./ui.js";




// -------------------------------------
// Create the expense manager instance.
// This object manages application state.
// -------------------------------------

const expenseManager = new ExpenseManager();





/**
 * Initializes the application.
 */
function initializeApp() {


    try {


        // ---------------------------------
        // Load saved expenses.
        // ---------------------------------

        const savedExpenses =
            loadExpenses();



        expenseManager.setExpenses(
            savedExpenses
        );



        // ---------------------------------
        // Load categories dynamically.
        // Uses recursion.js.
        // ---------------------------------

        const categories =
            flattenCategories();



        populateCategories(
            categories
        );



        // ---------------------------------
        // Initialize Chart.js.
        // ---------------------------------

        initializeChart();



        refreshApplication();



        setupEventListeners();



    }


    catch(error) {


        showMessage(

            error.message,

            "error"

        );


    }


}






/**
 * Refreshes all visible application data.
 *
 * Called after every data change.
 */
function refreshApplication() {


    const expenses =
        expenseManager.getExpenses();



    renderExpenses(
        expenses
    );


    updateSummary(
        expenseManager
    );


    updateChart(
        expenses
    );


}







/**
 * Handles adding a new expense.
 */
function handleExpenseSubmit(event) {


    event.preventDefault();



    try {



        const title =
            document.querySelector("#title")
                .value
                .trim();



        const amount =
            Number(
                document.querySelector("#amount")
                    .value
            );



        const category =
            document.querySelector("#category")
                .value;



        const date =
            document.querySelector("#date")
                .value;




        // -----------------------------
        // Basic validation.
        // -----------------------------

        if (!title) {


            throw new Error(
                "Please enter an expense name."
            );


        }



        if (

            Number.isNaN(amount) ||

            amount <= 0

        ) {


            throw new Error(
                "Please enter a valid amount."
            );


        }



        if (!date) {


            throw new Error(
                "Please select a date."
            );


        }



        expenseManager.addExpense(

            title,

            amount,

            category,

            date

        );



        refreshApplication();



        clearForm();



        showMessage(

            "Expense added successfully.",

            "success"

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
 * Handles deleting expenses.
 *
 * Uses event delegation.
 */
function handleDelete(event) {



    if (

        !event.target.classList.contains(
            "delete-btn"
        )

    ) {


        return;


    }



    try {



        const id =
            Number(
                event.target.dataset.id
            );



        expenseManager.deleteExpense(
            id
        );



        refreshApplication();



        showMessage(

            "Expense deleted.",

            "success"

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
 * Handles filtering expenses.
 */
function handleFilter() {


    const category =
        document.querySelector("#filterCategory")
            .value;



    const filteredExpenses =
        expenseManager.filterExpenses(
            category
        );



    renderExpenses(
        filteredExpenses
    );


}







/**
 * Handles sorting expenses.
 */
function handleSort() {


    const sortType =
        document.querySelector("#sortBy")
            .value;



    expenseManager.sortExpenses(
        sortType
    );



    refreshApplication();


}







/**
 * Connects event listeners.
 */
function setupEventListeners() {



    const form =
        document.querySelector("#expenseForm");



    const table =
        document.querySelector("#expenseTable");



    const filter =
        document.querySelector("#filterCategory");



    const sort =
        document.querySelector("#sortBy");





    if(form) {


        form.addEventListener(

            "submit",

            handleExpenseSubmit

        );


    }



    if(table) {


        table.addEventListener(

            "click",

            handleDelete

        );


    }




    if(filter) {


        filter.addEventListener(

            "change",

            handleFilter

        );


    }




    if(sort) {


        sort.addEventListener(

            "change",

            handleSort

        );


    }


}







/*
    Start application after HTML loads.
*/

document.addEventListener(

    "DOMContentLoaded",

    initializeApp

);