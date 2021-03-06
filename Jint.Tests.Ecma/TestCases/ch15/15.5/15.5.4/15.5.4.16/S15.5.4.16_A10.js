// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The String.prototype.toLowerCase.length property has the attribute ReadOnly
 *
 * @path ch15/15.5/15.5.4/15.5.4.16/S15.5.4.16_A10.js
 * @description Checking if varying the String.prototype.toLowerCase.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.toLowerCase.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.toLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.toLowerCase.length;

String.prototype.toLowerCase.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.toLowerCase.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.toLowerCase.length; String.prototype.toLowerCase.length = function(){return "shifted";}; String.prototype.toLowerCase.length === __obj. Actual: '+String.prototype.toLowerCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

