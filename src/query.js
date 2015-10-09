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
      // hasClass(klass) {
      //   if (el.classList)
      //     el.classList.contains(className);
      //   else
      //     new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      // }
    }
  });
  return f.compose(plugin, Query);
};
