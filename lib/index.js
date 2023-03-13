/**
 * @fileoverview ESLint presets for react
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");
const path = require("path");
const eslintrc = require("../configs/.eslintrc");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
  // 引入所有的自定义的规则
  rules: requireIndex(path.join(__dirname + "/rules")),
  configs: {
    recommended: eslintrc,
  },
};
