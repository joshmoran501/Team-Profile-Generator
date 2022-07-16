const Engineer = require('../lib/engineer')

test('sample Engineer object', () => {
    const engineer = new Engineer ('Josh', 13, 'josh.moran501@gmail.com', 'joshmoran501')

    expect(engineer.github).toEqual('joshmoran501')
})

test('getGitHub test', () => {
    const engineer = new Engineer ('Josh', 13, 'josh.moran501@gmail.com', 'joshmoran501')

    expect(engineer.getGitHub()).toEqual('joshmoran501')
})

test('getRole test', () => {
    const engineer = new Engineer ('Josh', 13, 'josh.moran501@gmail.com', 'joshmoran501')

    expect(engineer.getRole()).toEqual('Engineer')
})