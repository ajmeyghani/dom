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
