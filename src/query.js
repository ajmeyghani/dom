var f = window.stampit;
var {slice} = require('./utils');

module.exports = plugin => {
  var Query = f({
    methods: {
      get(selector) {
        var idOrClass = /^#|^\./;
        var target = selector.replace(idOrClass, '');
        this.domNodes = idOrClass.test(selector) ?
          /^#/.test(selector) ? document.getElementById(target) :
          slice.call(document.getElementsByClassName(target))
        : document.getElementsByTagName(selector);
        return this;
      },
      hasClass(klass) {
        var el = this.nodes();
        if (el.length) {
          throw new Error('Can only check for a single node.');
        } else {
          return el.className.search (klass) !== -1;
        }

      }
    }
  });
  return f.compose(plugin, Query);
};
