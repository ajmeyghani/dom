var f = window.stampit;
var dom = f({
  refs: {
    domNodes: []
  },
  methods: {
    nodes() {
      return this.domNodes;
    }
  }
});

dom = require('./query')(dom);
dom = require('./set')(dom);

module.exports = dom;
