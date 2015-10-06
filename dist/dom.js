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

	var ƒ = __webpack_require__(1);

	var _require = __webpack_require__(2);

	var is = _require.is;
	var slice = _require.slice;

	if (true) {
	  var hello = ƒ().make('div').inner('<h1>hello world </h1>').nodes();

	  var body = ƒ().get('body').nodes()[0];
	  body.appendChild(hello);

	  ƒ().get('#colors').nodes().addEventListener('click', function (e) {
	    if (is(e.target.type)) {
	      ƒ().get('.number').nodes().forEach(function (node) {
	        node.style.color = e.target.getAttribute('data-color');
	      });
	    }
	  });
	}

	module.exports = ƒ;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var f = window.stampit;
	var dom;

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

	dom = Base;
	dom = __webpack_require__(8)(dom);
	dom = __webpack_require__(9)(dom);

	module.exports = dom;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var slice = Array.prototype.slice;
	var is = function is(thing) {
	  return thing !== undefined;
	};
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

	module.exports = { slice: slice, is: is, request: request };

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var f = window.stampit;

	var _require = __webpack_require__(2);

	var slice = _require.slice;

	module.exports = function (plugin) {
	  var Query = f({
	    methods: {
	      get: function get(selector) {
	        var idOrClass = /^#|^\./;
	        var target = selector.replace(idOrClass, '');
	        if (idOrClass.test(selector)) {
	          var idMatch = document.getElementById(target);
	          var classMatches = document.getElementsByClassName(target);
	          this.domNodes = /^#/.test(selector) ? idMatch : slice.call(classMatches);
	          return this;
	        } else {
	          this.domNodes = document.getElementsByTagName(selector);
	          return this;
	        }
	      }
	    }
	  });
	  return f.compose(plugin, Query);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var f = window.stampit;

	var _require = __webpack_require__(2);

	var slice = _require.slice;

	module.exports = function (plugin) {
	  var Set = f({
	    methods: {
	      make: function make(node) {
	        this.domNodes = document.createElement(node);
	        return this;
	      },
	      inner: function inner(innerHtml) {
	        if (this.domNodes.length) {
	          slice.call(this.domNodes).forEach(function (n) {
	            n.innerHTML = innerHtml;
	          });
	        } else {
	          this.domNodes.innerHTML = innerHtml;
	        }
	        return this;
	      }
	    }
	  });
	  return f.compose(plugin, Set);
	};

/***/ }
/******/ ])
});
;