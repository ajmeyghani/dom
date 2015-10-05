# DOM
Simple helper for working with the DOM

# Usage

**NOTE**: Methods are chainable.

- Make a node: `dom().make('div');`
- Set `innerHTML`: `dom().make('div').inner('<p> ... </p>');`
- Get element by tag, class or id (select by css selector _**not**_ included)

    ```
    dom().get('body');
    dom().get('.someclass');
    dom().get('#someid');
    ```
In all cases, use the `nodes` method to get the raw node/nodes:

    `dom().make('div').inner('<p> something </p>').nodes()`
    `dom().get('body').nodes()[0]`

# Development

- Install node
- `node server`
- `npm run dev -s`
- `npm test`

# Build

- `npm run build -s`


