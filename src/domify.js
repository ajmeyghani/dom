var f = window.stampit;

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

var Query = require('./query');
var Set = require('./set');

module.exports = f.compose(Base, Set, Query);
