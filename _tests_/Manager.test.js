const Manager = require('../lib/manager')

test('sample Manager object', () => {
    const manager = new Manager ('Josh', 13, 'josh.moran501@gmail.com', 42)

    expect(manager.officeNumber).toEqual(42)
})

test('getRole test', () => {
    const manager = new Manager ('Josh', 13, 'josh.moran501@gmail.com', 'Georiga Tech')

    expect(manager.getRole()).toEqual('Manager')
})