const myFirstKata = require('./index.js')

test('Test 1', () => {
  const result = 3 % 5 + 5 % 3
  expect(myFirstKata(3, 5)).toBe(result)
})

test('Test 2', () => {
  expect(myFirstKata('hello', 3)).toBeFalsy()
})

test('Test 3', () => {
  expect(myFirstKata(67, 'bye')).toBeFalsy()
})

test('Test 4', () => {
  expect(myFirstKata(true, true)).toBeFalsy()
})

test('Test 5', () => {
  const result = 107 % 314 + 314 % 107
  expect(myFirstKata(314, 107)).toBe(result)
})

test('Test 6', () => {
  const result = 9 % 19483 + 19483 % 9
  expect(myFirstKata(19483, 9)).toBe(result)
})
