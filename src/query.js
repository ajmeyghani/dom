var f = window.stampit;
var {slice} = require('./utils');

module.exports = plugin => {
  var Query = f({
    methods: {
      get(selector) {
        var idOrClass = /^#|^\./;
        var target = selector.replace(idOrClass, '');
        if (idOrClass.test(selector)) {
          var idMatch = document.getElementById(target);
          var classMatches = document.getElementsByClassName(target);
          this.domNodes = /^#/.test(selector) ? idMatch : slice.call(classMatches);
          return this;
        } else {
          this.domNodes = document.getElementsByTagName(selector);
          return this;
        }
      }
    }
  });
  return f.compose(plugin, Query);
};
