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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dom = __webpack_require__(1);

	var _dom2 = _interopRequireDefault(_dom);

	if (true) {
	  document.addEventListener('DOMContentLoaded', function () {
	    var hello = (0, _dom2['default'])().make('div').inner('<h1>hello world </h1>').nodes();

	    var body = (0, _dom2['default'])().get('body').nodes()[0];
	    body.appendChild(hello);
	  });
	}

	exports['default'] = _dom2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var f = window.stampit;

	var _require = __webpack_require__(2);

	var isDefined = _require.isDefined;

	var dom = f({
	  init: function init(self) {},
	  refs: {
	    domNodes: []
	  },
	  methods: {
	    nodes: function nodes() {
	      return this.domNodes;
	    },
	    setNodes: function setNodes(nodes) {
	      this.domNodes = nodes;
	    }
	  }
	});

	var domFactory = function domFactory(arg) {
	  if (isDefined(arg)) {
	    if (arg.nodeName) {
	      var d = dom();
	      d.setNodes(arg);
	      return d;
	    } else if (Array.isArray(arg)) {
	      var nodes = arg;
	      return nodes.map(function (n) {
	        var d = dom();
	        if (n.nodeName) {
	          d.setNodes(n);
	        } else {
	          d.make(n);
	        }
	        return d;
	      });
	    } else if (typeof arg === 'string') {
	      return dom().make(arg);
	    } else {
	      throw new Error('Not valid arguments. Arguments can be either a DOM node or the name of an HTML element');
	    }
	  }
	  return dom(null, arg);
	};

	dom = __webpack_require__(3)(dom);
	dom = __webpack_require__(4)(dom);

	module.exports = domFactory;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var slice = Array.prototype.slice;
	var isDefined = function isDefined(thing) {
	  return typeof thing !== 'undefined';
	};

	exports['default'] = { slice: slice, isDefined: isDefined };
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var f = window.stampit;
	module.exports = function (plugin) {
	  var Query = f({
	    methods: {
	      get: function get(selector) {
	        var isIdOrClass = /^#|^\./;
	        var targetDomNode = selector.replace(isIdOrClass, '');

	        var possibleDomFns = [{
	          name: 'byId',
	          pattern: /^#/,
	          fn: document.getElementById
	        }, {
	          name: 'byClass',
	          pattern: /^\./,
	          fn: document.getElementsByClassName
	        }, {
	          name: 'byTag',
	          pattern: /^[^#\.]/,
	          fn: document.getElementsByTagName
	        }];

	        var isSelectorMatchDomFn = function isSelectorMatchDomFn(selector) {
	          return function (possibleDomFn) {
	            return possibleDomFn.pattern.test(selector);
	          };
	        };

	        var matchedNodes = possibleDomFns.filter(isSelectorMatchDomFn(selector))[0].fn.call(document, targetDomNode);

	        this.domNodes = matchedNodes && matchedNodes.length ? Array.from(matchedNodes) : matchedNodes;

	        return this;
	      },
	      hasClass: function hasClass(klass) {
	        var el = this.nodes();
	        if (el.length) {
	          throw new Error('Can only check for a single node.');
	        } else {
	          return el.className.indexOf(klass) !== -1;
	        }
	      },
	      parent: function parent() {
	        return dom(this.domNodes.parentNode);
	      }
	    }
	  });
	  return f.compose(plugin, Query);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var f = window.stampit;

	exports['default'] = function (plugin) {
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
	          var initialClasses = node.className.split(' ');
	          node.className = initialClasses.concat(klass.split(/[ ]+/)).filter(function (className) {
	            return className !== '';
	          }).join(' ');
	        });
	        return this;
	      },
	      removeClass: function removeClass(klass) {
	        var nodes = this.domNodes.length ? this.nodes() : [this.nodes()];
	        nodes.forEach(function (node) {
	          var nodeClasses = node.className.split(' ');
	          var klasses = klass.split(' ');
	          klasses.forEach(function (name) {
	            var position = nodeClasses.indexOf(name);
	            if (~position) {
	              nodeClasses.splice(position, 1);
	            }
	          });
	          node.className = nodeClasses.join(' ');
	        });
	        return this;
	      }

	    }
	  });
	  return f.compose(plugin, Set);
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;