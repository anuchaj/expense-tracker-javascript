// =============================================
// charts.js
//
// Uses Chart.js to visualize spending.
//
// This satisfies the third-party library
// requirement.
//
// Also demonstrates ES6 map() and reduce().
// =============================================

let chart;

/**
 * Creates the initial chart.
 */
export function initializeChart() {

    const ctx =
        document
        .querySelector("#expenseChart");

    chart = new Chart(ctx, {

        type: "pie",

        data: {

            labels: [],

            datasets: [

                {

                    data: []

                }

            ]

        }

    });

}

/**
 * Updates the chart whenever
 * expenses change.
 *
 * @param {Array} expenses
 */
export function updateChart(expenses) {

    // Get every category name
    const categories = [

        ...new Set(

            expenses.map(

                expense => expense.category

            )

        )

    ];

    // Calculate totals
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

    chart.data.labels = categories;

    chart.data.datasets[0].data = totals;

    chart.update();

}