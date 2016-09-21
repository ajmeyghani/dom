# DOM ![image](https://travis-ci.org/aminmeyghani/dom.svg?branch=master)

Simple helper for working with the DOM.

## Browser Compatibility

- IE >= 9
- Firefox >= 10
- Safari >= 5
- Chrome >= 14
- Opera >= 15
- iOS >= 4
- Android >= 2.3

## API

**All methods are chainable except those that terminate.** The methods that are not chainable, are denoted with a `*`.

### `dom`

The `dom` constructor can:

- wrap DOM node name: `dom('div')` -> `Dom instance`
- array of DOM node names: `dom(['div', 'p'])` -> `array of Dom instances`
- a DOM node: `dom(document.createElement('div'))` -> `Dom instance`
- an array of DOM nodes: `dom([document.createElement('div'), document.createElement('p')])` -> `array of Dom instances`


### `make`

Make an html node: `dom().make('div');` Equivallent to `dom('div')`

### `inner`

Set the of an node `innerHTML`: `dom().make('div').inner('<p> ... </p>');`

### `get`

Get element by tag, class or id (select by css selector _**not**_ included)

    dom().get('body');
    dom().get('.someclass');
    dom().get('#someid');

### `parent`

Gets the parent element wrapped in a Dom instance

    var parent = dom().get('#child1').parent();
    expect(parent.nodes().nodeName).toBe('DIV)'

### `addClass`

- Adds class to element(s): `dom().make('div').addClass('newclass')`
- Add multiple classes: `dom().make('div').addClass('some more class')`

### `removeClass`

Remove class(es) from element(s): `dom().get('#someElement').removeClass('toRevmoe')`
You can also remove multiple classes:

  `dom().get('#elm').removeClass('first second third')`

### `hasClass*`

Checks if the given element has the given class:

    dom().make('div').addClass('newclass').hasClass('newclass');

### `nodes*`

In all cases, use the `nodes` method to get the raw node/nodes:

    dom().make('div').inner('<p> something </p>').nodes()

    dom().get('body').nodes()[0]

## Extending by Plugins

After loading `stampit` and `dom`, you can extend the `dom` object very easily.

```
<script src="stampit.min.js"></script>
<script src="dom.min.js"></script>
<script src="plugin.js"></script>
```

`plugin.js`:

```
var f = window.stampit;
var dom = window.dom;

var plugin = f({
  init: function (self) {
    // private stuff here.
  },
  methods: {
    prefixMethodName: function () {
      // ...
      // this refers to an instance of dom.
    }
  }
});

window.dom = f.compose(dom, plugin);
```
**NOTES**: Prefix your public methods to avoid possible conflicts with other plugins.

## Development

- Install node

- Run `npm i && bower i` to install the dependencies.

- Run `npm run dev -s` to start webpack to watch your files.

- Then run `npm run tdd -s` to watch the files and run the tests.

- If you want to run the tests in CI mode, just `npm test`

## Build

`npm run build -s`


