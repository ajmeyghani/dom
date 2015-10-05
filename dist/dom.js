(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dom"] = factory();
	else
		root["dom"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _domify = __webpack_require__(1);

	var _domify2 = _interopRequireDefault(_domify);

	var _utils = __webpack_require__(2);

	if (true) {
	  var hello = (0, _domify2['default'])().make('div').inner('<h1>hello world </h1>').nodes();

	  var body = (0, _domify2['default'])().get('body').nodes()[0];
	  body.appendChild(hello);

	  (0, _domify2['default'])().get('#colors').nodes().addEventListener('click', function (e) {
	    if ((0, _utils.is)(e.target.type)) {
	      (0, _domify2['default'])().get('.number').nodes().forEach(function (node) {
	        node.style.color = e.target.getAttribute('data-color');
	      });
	    }
	  });
	}

	module.exports = _domify2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var f = window.stampit;

	var Base = f({
	  refs: {
	    domNodes: []
	  },
	  methods: {
	    nodes: function nodes() {
	      return this.domNodes;
	    }
	  }
	});

	var Query = f({
	  methods: {
	    get: function get(selector) {
	      var idOrClass = /^#|^\./;
	      var target = selector.replace(idOrClass, '');
	      if (idOrClass.test(selector)) {
	        var idMatch = document.getElementById(target);
	        var classMatches = document.getElementsByClassName(target);
	        this.domNodes = /^#/.test(selector) ? idMatch : _utils.slice.call(classMatches);
	        return this;
	      } else {
	        this.domNodes = document.getElementsByTagName(selector);
	        return this;
	      }
	    }
	  }
	});
	var query = Query();

	exports.query = query;
	var Set = f({
	  methods: {
	    make: function make(node) {
	      this.domNodes = document.createElement(node);
	      return this;
	    },
	    inner: function inner(innerHtml) {
	      if (this.domNodes.length) {
	        _utils.slice.call(this.domNodes).forEach(function (n) {
	          n.innerHTML = innerHtml;
	        });
	      } else {
	        this.domNodes.innerHTML = innerHtml;
	      }
	      return this;
	    }
	  }
	});
	var set = Set();

	exports.set = set;
	var dom = f.compose(Base, Set, Query);
	module.exports = dom;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var slice = Array.prototype.slice;
	exports.slice = slice;
	var is = function is(thing) {
	  return thing !== undefined;
	};
	exports.is = is;
	var request = function request(url, fn) {
	  var req = new XMLHttpRequest();
	  req.onreadystatechange = function (e) {
	    if (req.readyState === 4) {
	      fn(req.responseText);
	    }
	  };
	  req.open('get', url);
	  req.send();
	};
	exports.request = request;

/***/ }
/******/ ])
});
;