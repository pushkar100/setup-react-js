import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Simple from '../src/example'

describe('<Simple />', () => {
  it('contains a div with hello', () => {
    const wrapper = shallow(<Simple />)
    expect(wrapper.contains(<div>Hello</div>)).toEqual(true)
  })
})
