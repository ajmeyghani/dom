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
      }
    }
  });
  return f.compose(plugin, Query);
};
