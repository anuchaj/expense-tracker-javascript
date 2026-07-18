/**
 * ==========================================================
 * File: charts.js
 * Course: CSE 310 - Applied Programming
 * Project: Personal Expense Tracker
 *
 * Description:
 * This module manages the application's Chart.js chart.
 * It creates and updates a responsive doughnut chart
 * showing the user's spending by category.
 *
 * This module intentionally demonstrates:
 * • Third-party JavaScript library (Chart.js)
 * • ES6 map()
 * • ES6 reduce()
 * • ES6 Set
 * ==========================================================
 */

"use strict";

/**
 * Stores the Chart.js instance.
 * Only one chart instance should exist.
 */
let expenseChart = null;

/**
 * Color palette used for chart slices.
 * More colors can easily be added later.
 */
const chartColors = [
    "#2563EB",
    "#16A34A",
    "#F97316",
    "#9333EA",
    "#DC2626",
    "#0891B2",
    "#CA8A04",
    "#14B8A6",
    "#EC4899",
    "#84CC16"
];

/**
 * Creates the Chart.js doughnut chart.
 *
 * This function should only be called once
 * when the application starts.
 */
export function initializeChart() {

    const canvas = document.querySelector("#expenseChart");

    if (!canvas) {

        throw new Error("Expense chart canvas was not found.");

    }

    expenseChart = new Chart(canvas, {

        type: "doughnut",

        data: {

            labels: [],

            datasets: [

                {

                    label: "Expenses",

                    data: [],

                    backgroundColor: chartColors,

                    borderColor: "#FFFFFF",

                    borderWidth: 2

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                },

                title: {

                    display: true,

                    text: "Expenses by Category"

                }

            }

        }

    });

}

/**
 * Updates the chart whenever the expense
 * collection changes.
 *
 * @param {Array} expenses
 */
export function updateChart(expenses) {

    // If the chart hasn't been initialized,
    // there is nothing to update.
    if (!expenseChart) {

        return;

    }

    // ------------------------------------
    // Build a unique list of categories.
    // Demonstrates ES6 Set and map().
    // ------------------------------------

    const categories = [

        ...new Set(

            expenses.map(

                expense => expense.category

            )

        )

    ];

    // ------------------------------------
    // Calculate the total amount spent
    // within each category.
    //
    // Demonstrates map(), filter(),
    // and reduce().
    // ------------------------------------

    const totals = categories.map(category => {

        return expenses

            .filter(

                expense =>

                    expense.category === category

            )

            .reduce(

                (sum, expense) =>

                    sum + expense.amount,

                0

            );

    });

    // ------------------------------------
    // Handle the case where there are
    // no expenses.
    // ------------------------------------

    if (categories.length === 0) {

        expenseChart.data.labels = [

            "No Expenses"

        ];

        expenseChart.data.datasets[0].data = [

            1

        ];

        expenseChart.data.datasets[0].backgroundColor = [

            "#CBD5E1"

        ];

        expenseChart.update();

        return;

    }

    // Restore the normal color palette.
    expenseChart.data.datasets[0].backgroundColor = chartColors;

    // Update labels.
    expenseChart.data.labels = categories;

    // Update values.
    expenseChart.data.datasets[0].data = totals;

    // Redraw chart.
    expenseChart.update();

}

/**
 * Completely destroys the current chart.
 *
 * Useful if the application ever needs to
 * recreate the chart.
 */
export function destroyChart() {

    if (expenseChart) {

        expenseChart.destroy();

        expenseChart = null;

    }

}