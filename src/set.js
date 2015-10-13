var f = window.stampit;

module.exports = plugin => {
  var Set = f({
    methods: {
      make(node) {
        this.domNodes = document.createElement(node);
        return this;
      },
      inner(innerHtml) {
        if (this.domNodes.length) {
          this.nodes().forEach(function (n) { n.innerHTML = innerHtml });
        } else {
          this.domNodes.innerHTML = innerHtml;
        }
        return this;
      },
      addClass(klass) {
        var nodes = this.domNodes.length ? this.nodes() : [this.nodes()];
        nodes.forEach(function (node) {
          node.className = klass.split(/[ ]+/)
              .filter(className => { return className !== ""; })
              .join(' ')
        });
        return this;
      },
      removeClass(klass) {
        var nodes = this.domNodes.length ? this.nodes() : [this.nodes()];
        nodes.forEach(function (node) {
          node.className = node.className.split(/[ ]+/)
              .filter(className => { return className !== ""; } )
              .filter(className => { return className !== klass; })
              .join(' ');
        });
        return this;
      }

    }
  });
  return f.compose(plugin, Set);
};
