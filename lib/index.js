/**
 * @fileoverview Prevent imports and usages of styled-components
 * @author Tom McIntosh
 */
"use strict";

const noImports = require("./rules/imports");
const noUsages = require("./rules/usages");

// import all rules in lib/rules
module.exports.rules = {
    "imports": noImports,
    "usages": noUsages
};
