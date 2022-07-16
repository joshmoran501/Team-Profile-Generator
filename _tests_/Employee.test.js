const Employee = require('../lib/employee')

test('sample employee object', () => {
    const employee = new Employee ('Josh', 13, 'josh.moran501@gmail.com')

    expect(employee.name).toEqual('Josh')
    expect(employee.id).toEqual(13)
    expect(employee.email).toEqual('josh.moran501@gmail.com')
})

test('getName test', () => {
    const employee = new Employee ('Josh', 13, 'josh.moran501@gmail.com')

    expect(employee.getName()).toEqual('Josh')
})

test('getID test', () => {
    const employee = new Employee ('Josh', 13, 'josh.moran501@gmail.com')

    expect(employee.getID()).toEqual(13)
})

test('getEmail test', () => {
    const employee = new Employee ('Josh', 13, 'josh.moran501@gmail.com')

    expect(employee.getEmail()).toEqual('josh.moran501@gmail.com')
})

test('getRole test', () => {
    const employee = new Employee ('Josh', 13, 'josh.moran501@gmail.com')

    expect(employee.getRole()).toEqual('Employee')
})