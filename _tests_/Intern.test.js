const Intern = require('../lib/intern')

test('sample Intern object', () => {
    const intern = new Intern ('Josh', 13, 'josh.moran501@gmail.com', 'Georgia Tech')

    expect(intern.school).toEqual('Georgia Tech')
})

test('getSchool test', () => {
    const intern = new Intern ('Josh', 13, 'josh.moran501@gmail.com', 'Georgia Tech')

    expect(intern.getSchool()).toEqual('Georgia Tech')
})

test('getRole test', () => {
    const intern = new Intern ('Josh', 13, 'josh.moran501@gmail.com', 'Georgia Tech')

    expect(intern.getRole()).toEqual('Intern')
})