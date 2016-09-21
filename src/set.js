const f = window.stampit;

export default plugin => {
  const Set = f({
    methods: {
      make(node) {
        this.domNodes = document.createElement(node);
        return this;
      },
      inner(innerHtml) {
        if (this.domNodes.length) {
          this.nodes().forEach(n => {
            n.innerHTML = innerHtml;
          });
        } else {
          this.domNodes.innerHTML = innerHtml;
        }
        return this;
      },
      addClass(klass) {
        const nodes = this.domNodes.length ? this.nodes() : [this.nodes()];
        nodes.forEach(node => {
          const initialClasses = node.className.split(' ');
          node.className = initialClasses.concat(klass.split(/[ ]+/))
              .filter(className => className !== '')
              .join(' ');
        });
        return this;
      },
      removeClass(klass) {
        const nodes = this.domNodes.length ? this.nodes() : [this.nodes()];
        nodes.forEach(node => {
          const nodeClasses = node.className.split(' ');
          const klasses = klass.split(' ');
          klasses.forEach(name => {
            const position = nodeClasses.indexOf(name);
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
