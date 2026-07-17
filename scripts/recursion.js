// ============================================
// recursion.js
//
// Demonstrates recursion by walking through
// the nested category tree.
//
// This satisfies the recursion requirement
// for the JavaScript language module.
// ============================================

import { categories } from "./categories.js";

/**
 * Recursively walks the category tree
 * and returns a flat list of names.
 *
 * @param {Array} nodes
 * @param {Array} results
 * @returns {Array}
 */
export function flattenCategories(
    nodes = categories,
    results = []
) {

    nodes.forEach(node => {

        results.push(node.name);

        // If children exist,
        // recursively visit them.
        if (node.children) {

            flattenCategories(
                node.children,
                results
            );

        }

    });

    return results;

}