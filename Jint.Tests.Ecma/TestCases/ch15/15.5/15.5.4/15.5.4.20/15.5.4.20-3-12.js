/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.5/15.5.4/15.5.4.20/15.5.4.20-3-12.js
 * @description String.prototype.trim - 'S' is a string that ends with null character
 */


function testcase() {
        return "abc\0\u0000".trim() === "abc\0\u0000";
    }
runTestCase(testcase);
