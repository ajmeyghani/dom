dom = require('../src/dom')

describe 'Get method', ->

  it 'should get node element by class name', ->
    nodes = dom().get('.c1').nodes()
    expect(nodes.length).toBe 2
    expect(nodes[0].getAttribute('class')).toBe 'c1'

  it 'should get node element by id', ->
    node = dom().get('#someid').nodes()
    expect(node.getAttribute('id')).toBe 'someid'

  it 'should get node element by tag names', ->
    nodes = dom().get('i').nodes()
    expect(nodes.length).toBe 3

describe 'Make method', ->

  it 'should make an element', ->
    p = dom().make('p').nodes()
    expect(p.nodeName.toLowerCase()).toBe 'p'

describe 'inner method', ->

  it 'should set the innerHTML of the nodes', ->
    div = dom().make('div').inner('<p>inner</p>').nodes()
    expect(div.hasChildNodes()).toBe true
    makeTest = dom().get('#make-test').nodes()
    makeTest.appendChild div

describe 'add class method', ->

  it 'should add class to the given node', ->
    div = dom().make('div').addClass('newclass').nodes()
    expect(div.className).toBe 'newclass'
    elms = dom().get('.elm').addClass('extra').nodes()

    doAllHaveClass = undefined
    elms.forEach (elm) ->
      if elm.className.search('extra') == -1
        doAllHaveClass = false
       else
        doAllHaveClass = true

    expect(doAllHaveClass).toBe true

describe 'has class', ->

  it 'should check if the given element has a class', ->
    div = dom().make('div').addClass('newclass');
    isClass = div.hasClass('newclass')
    expect(isClass).toBe true

