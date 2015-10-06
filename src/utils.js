var slice = Array.prototype.slice;
var is = function (thing) { return thing !== undefined; };
var request = function (url, fn) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function (e) {
    if (req.readyState === 4) { fn(req.responseText); }
  };
  req.open('get', url);
  req.send();
};

module.exports = { slice, is, request };
