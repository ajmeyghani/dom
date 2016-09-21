const f = window.stampit;
const {isDefined} = require('./utils');

let dom = f({
  init(self) {},
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

const domFactory = function(arg) {
  if (isDefined(arg)) {
    if (arg.nodeName) {
      const d = dom();
      d.setNodes(arg);
      return d;
    } else if (Array.isArray(arg)) {
      const nodes = arg;
      return nodes.map(n => {
        const d = dom();
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

dom = require('./query')(dom);
dom = require('./set')(dom);

module.exports = domFactory;
