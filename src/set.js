var f = window.stampit;
var {slice} = require('./utils');

module.exports = plugin => {
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
  return f.compose(plugin, Set);
};
