var f = window.stampit;
import {slice} from './utils';

var Base = f({
  refs: {
    domNodes: []
  },
  methods: {
    nodes() {
      return this.domNodes;
    }
  }
});

var Query = f({
  methods: {
    get(selector) {
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
export var query = Query();

var Set = f({
  methods: {
    make(node) {
      this.domNodes = document.createElement(node);
      return this;
    },
    inner(innerHtml) {
      if (this.domNodes.length) {
        slice.call(this.domNodes).forEach(function (n) {
          n.innerHTML = innerHtml
        });
      } else {
        this.domNodes.innerHTML = innerHtml;
      }
      return this;
    }
  }
});
export var set = Set();

var dom = f.compose(Base, Set, Query);
module.exports = dom;
