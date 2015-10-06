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

var dom = require('./query')(Base);
dom = require('./set')(dom);

module.exports = dom;
