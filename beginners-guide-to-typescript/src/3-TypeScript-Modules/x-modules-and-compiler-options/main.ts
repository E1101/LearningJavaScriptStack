/**
 * If we want our compiled code to run in Node.js, we can use CommonJS modules,
 * which are supported natively.
 * - CommonJS
 *
 * If we want to run our code in the browser, things get more complicated as
 * we have to choose between the following:
 *
 * - ES2015 Modules
 * - SystemJS
 * - CommonJS
 * - AMD
 * - UMD
 *
 * To specify the output module system, we set the module compiler option in
 * our tsconfig.json file.
 */
