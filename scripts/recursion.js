/**
 * ==========================================================
 * File: recursion.js
 * Course: CSE 310 - Applied Programming
 * Project: Personal Expense Tracker
 *
 * Description:
 * Demonstrates recursion by traversing the nested category
 * hierarchy and returning a flattened list of category names.
 *
 * This satisfies the recursion requirement for the
 * JavaScript module.
 * ==========================================================
 */

"use strict";

import { categoryTree } from "./categories.js";

/**
 * Recursively traverses the category hierarchy.
 *
 * Every category name encountered is added to the supplied
 * results array.
 *
 * @param {Array} nodes
 * @param {Array} results
 *
 * @returns {Array}
 */
export function flattenCategories(
    nodes = categoryTree,
    results = []
) {

    nodes.forEach(node => {

        // Skip the parent grouping names.
        // Only leaf categories are used as expense categories.
        if (!node.children) {

            results.push(node.name);

        }

        // Visit child nodes recursively.
        if (node.children) {

            flattenCategories(
                node.children,
                results
            );

        }

    });

    return results;

}

/**
 * Searches recursively for a category.
 *
 * Demonstrates another practical use of recursion.
 *
 * @param {string} categoryName
 * @param {Array} nodes
 *
 * @returns {boolean}
 */
export function categoryExists(
    categoryName,
    nodes = categoryTree
) {

    for (const node of nodes) {

        if (node.name === categoryName) {

            return true;

        }

        if (node.children) {

            if (

                categoryExists(
                    categoryName,
                    node.children
                )

            ) {

                return true;

            }

        }

    }

    return false;

}