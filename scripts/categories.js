// ============================================
// categories.js
// Stores the application's category hierarchy.
// This nested structure is intentionally used
// to demonstrate recursion.
// ============================================

export const categories = [

    {
        name: "Living",
        children: [

            { name: "Housing" },

            { name: "Utilities" }

        ]
    },

    {
        name: "Lifestyle",
        children: [

            { name: "Food" },

            { name: "Entertainment" },

            { name: "Shopping" }

        ]
    },

    {
        name: "Transportation"
    },

    {
        name: "Healthcare"
    },

    {
        name: "Education"
    },

    {
        name: "Other"
    }

];