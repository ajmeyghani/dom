var ƒ = require('./domify');
var {is, slice} = require('./utils');

if (IS_DEV) {
  var hello = ƒ().make('div')
                 .inner('<h1>hello world </h1>')
                 .nodes();

  var body = ƒ().get('body').nodes()[0];
  body.appendChild(hello);

  ƒ().get('#colors').nodes().addEventListener('click', function (e) {
    if (is(e.target.type)) {
      ƒ().get('.number').nodes().forEach(function (node) {
        node.style.color = e.target.getAttribute('data-color');
      });
    }
  });
}

module.exports = ƒ;
