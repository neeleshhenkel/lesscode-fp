const { 
    print, trace, hint, $, $P, $A, assert,
    space, blank, comma,
    l2String
} = require('../src/index.js')

// Generics
test('print', () => { expect(print('Neelesh Vaikhary')).toBe('Neelesh Vaikhary') })
test('trace', () => { expect(trace('Trace')(true)).toBe(true) })
test('hint', () => { expect(hint('Hint')(true)).toBe(true) })
test('$', () => { expect($(hint('Hinting'), trace('Tracing...'), print)('Neelesh')).toBe('Neelesh') })
test('$P', () => { expect($(l2String(space))($P(hint('Hinting'), trace('Tracing...'))('Neelesh'))).toBe(l2String(space)(['Neelesh', 'Neelesh']))})
test('$A', () => { expect($A(hint)(['Hint',true])).toBe(true) })
test('assert', () => { expect(assert(true)(true)('failed')).toBe(undefined); expect(assert(true)(false)('failed')).toBe(undefined)})