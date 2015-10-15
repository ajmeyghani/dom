var f = window.stampit;
var {is, isArray} = require('./utils');
var dom = f({
  init(self) {
    var arg = self.args[0];
    var instance = self.instance;
  },
  refs: {
    domNodes: []
  },
  methods: {
    nodes() {
      return this.domNodes;
    },
    setNodes(nodes) {
      this.domNodes = nodes;
    }
  }
});

var domFactory = function (arg) {
  if (is(arg)) {
    if (arg.nodeName) {
      var d = dom();
      d.setNodes(arg);
      return d;
    } else if (isArray(arg)) {
      var nodes = arg;
      return nodes.map( n => { var d = dom(); n.nodeName ? d.setNodes(n) : d.make(n); return d; } );
    } else if (typeof arg === 'string') {
      return dom().make(arg);
    } else {
      throw new Error('Not valid arguments. Arguments can be either a DOM node or the name of an HTML element');
    }
  }
  return dom(null, arg);
};

dom = require('./query')(dom);
dom = require('./set')(dom);

module.exports = domFactory;
