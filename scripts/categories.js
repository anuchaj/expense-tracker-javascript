/**
 * ==========================================================
 * File: categories.js
 * Course: CSE 310 - Applied Programming
 * Project: Personal Expense Tracker
 *
 * Description:
 * This module stores the application's category hierarchy.
 * Categories are intentionally organized as a tree so that
 * recursion can be used to traverse them.
 *
 * The category structure can easily be expanded without
 * changing any application logic.
 * ==========================================================
 */

"use strict";

/**
 * Category hierarchy.
 *
 * Parent categories group related expense categories.
 */
export const categoryTree = [

    {
        name: "Living",

        children: [

            {
                name: "Housing"
            },

            {
                name: "Utilities"
            }

        ]

    },

    {

        name: "Lifestyle",

        children: [

            {
                name: "Food"
            },

            {
                name: "Entertainment"
            },

            {
                name: "Shopping"
            }

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

        name: "Savings"

    },

    {

        name: "Personal Care"

    },

    {

        name: "Insurance"

    },

    {

        name: "Other"

    }

];