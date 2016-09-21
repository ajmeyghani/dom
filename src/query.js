const f = window.stampit;
module.exports = plugin => {
  const Query = f({
    methods: {
      get(selector) {
        const isIdOrClass = /^#|^\./;
        const targetDomNode = selector.replace(isIdOrClass, '');

        const possibleDomFns = [
          {
            name: 'byId',
            pattern: /^#/,
            fn: document.getElementById
          },
          {
            name: 'byClass',
            pattern: /^\./,
            fn: document.getElementsByClassName
          },
          {
            name: 'byTag',
            pattern: /^[^#\.]/,
            fn: document.getElementsByTagName
          }
        ];

        const isSelectorMatchDomFn = selector =>
          possibleDomFn => possibleDomFn.pattern.test(selector);

        const matchedNodes = possibleDomFns
          .filter(isSelectorMatchDomFn(selector))[0]
          .fn.call(document, targetDomNode);

        this.domNodes = matchedNodes && matchedNodes.length ?
          Array.from(matchedNodes) : matchedNodes;

        return this;
      },
      hasClass(klass) {
        const el = this.nodes();
        if (el.length) {
          throw new Error('Can only check for a single node.');
        } else {
          return el.className.indexOf(klass) !== -1;
        }
      },
      parent() {
        return dom(this.domNodes.parentNode);
      }
    }
  });
  return f.compose(plugin, Query);
};
