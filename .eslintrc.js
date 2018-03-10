/**
 * @author PulseShift GmbH
 *
 * GENERAL EXPLANATION
 * We only want errors or no errors. A warning can be interpreded differently.
 * Therfore all lint rules must be either off or error. Warnings will waste time.
 */

module.exports = {
  env: {
    browser: true, // allow browser global variables
    node: true, // allow Node.js global variables and Node.js-specific rules
    es6: true // enable all ECMAScript 6 features except for modules.
  },

  extends: ['eslint:recommended', 'plugin:css-modules/recommended', 'prettier'],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true
    }
  },

  plugins: ['babel', 'css-modules', 'prettier'],

  // define globals
  globals: {}
}
