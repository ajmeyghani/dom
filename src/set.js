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
          var initialClasses = node.className.split(' ');
          node.className =  initialClasses.concat(klass.split(/[ ]+/))
              .filter(className => { return className !== ""; })
              .join(' ')
        });
        return this;
      },
      removeClass(klass) {
        var nodes = this.domNodes.length ? this.nodes() : [this.nodes()];
        nodes.forEach(function (node) {
          var nodeClasses = node.className.split(' ');
          var klasses = klass.split(' ');
          klasses.forEach(function (name, idx) {
            var position = nodeClasses.indexOf(name);
            if (position !== -1) { nodeClasses.splice(position, 1); }
          });
          node.className = nodeClasses.join(' ');
        });
        return this;
      }

    }
  });
  return f.compose(plugin, Set);
};
