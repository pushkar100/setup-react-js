import Simple from '../src/example'

describe('Testing example', () => {
  it('must instantiate class B with state & method', () => {
    const b = new Simple()
    expect(b).toHaveProperty('state')
    expect(b).toHaveProperty('method')
  })
})
