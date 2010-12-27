/*
* debug-assert-RequireJS-module - RequireJS module for debugging and assertion.
*
* https://github.com/monjudoh/debug-assert-RequireJS-module
* version: 0.1
*
* Copyright (c) 2010 monjudoh
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL (GPL-LICENSE.txt) licenses.
*/
define(function() {
  function noDebug() {
  }

  noDebug.assert = function() {
  };

  return noDebug;
});