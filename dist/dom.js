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

	var _require = __webpack_require__(3);

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
	var dom = f({
	  refs: {
	    domNodes: []
	  },
	  methods: {
	    nodes: function nodes() {
	      return this.domNodes;
	    }
	  }
	});

	dom = __webpack_require__(2)(dom);
	dom = __webpack_require__(4)(dom);

	module.exports = dom;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var f = window.stampit;

	var _require = __webpack_require__(3);

	var slice = _require.slice;

	module.exports = function (plugin) {
	  var Query = f({
	    methods: {
	      get: function get(selector) {
	        var idOrClass = /^#|^\./;
	        var target = selector.replace(idOrClass, '');
	        this.domNodes = idOrClass.test(selector) ? /^#/.test(selector) ? document.getElementById(target) : slice.call(document.getElementsByClassName(target)) : document.getElementsByTagName(selector);
	        return this;
	      },
	      hasClass: function hasClass(klass) {
	        var el = this.nodes();
	        if (el.length) {
	          throw new Error('Can only check for a single node.');
	        } else {
	          if (el.classList) {
	            return el.classList.contains(klass);
	          } else {
	            return new RegExp('(^| )' + klass + '( |$)', 'gi').test(el.klass);
	          }
	        }
	      }
	    }
	  });
	  return f.compose(plugin, Query);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var slice = Array.prototype.slice;
	var is = function is(thing) {
	  return thing !== undefined;
	};
	var request = (function () {
	  var xhr = new XMLHttpRequest();
	  return function (method, url, callback) {
	    xhr.onreadystatechange = function () {
	      if (xhr.readyState === 4) {
	        callback(xhr.responseText);
	      }
	    };
	    xhr.open(method, url);
	    xhr.send();
	  };
	})();

	module.exports = { slice: slice, is: is, request: request };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var f = window.stampit;

	var _require = __webpack_require__(3);

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
	          this.nodes().forEach(function (n) {
	            n.innerHTML = innerHtml;
	          });
	        } else {
	          this.domNodes.innerHTML = innerHtml;
	        }
	        return this;
	      },
	      addClass: function addClass(klass) {
	        var nodes = this.domNodes.length ? this.nodes() : [this.nodes()];
	        nodes.forEach(function (node) {
	          if (node.classList) {
	            node.classList.add(klass);
	          } else {
	            node.className += ' ' + klass;
	          }
	        });
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