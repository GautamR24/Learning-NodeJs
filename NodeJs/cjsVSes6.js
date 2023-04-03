/**
 * in cjs, to use the export from other files we need to use "require(const a = require("temp)" and to export
 * in anything in the file we use "module.exportes = name_of_function";
 */

/**
 * i mjs, to use the export from other files we need to use "import {a} from "path"" and to export
 * anything in the file we use "export function_name" or "export default function_name" if not using {}.
 * To use mjs, add - ("type":"module") in package.json
 */

/**
 * import {a}: this will look for this function in the module.
 * import a: this will look for the default function in the module.
 */