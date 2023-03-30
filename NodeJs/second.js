test = {
    name : "testingName",
    color : "testingColor"
}
console.log(exports,require,module,__filename,__dirname);
module.exports = test

/**
 * this is module wrapper function, node js wraps every module export inside this type
 * of functions
 */
//function(exports,require,module,__filename,__dirname)