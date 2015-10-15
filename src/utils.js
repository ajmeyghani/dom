var slice = Array.prototype.slice;
var isArray = arg => { return Object.prototype.toString.call(arg) === "[object Array]"; };
var is = thing => { return thing !== undefined; };
var request = function () {
  var xhr = new XMLHttpRequest();
  return function( method, url, callback ) {
    xhr.onreadystatechange = function() {
      if ( xhr.readyState === 4 ) {
        callback( xhr.responseText );
      }
    };
    xhr.open( method, url );
    xhr.send();
  };
}();

module.exports = { slice, is, request, isArray };
