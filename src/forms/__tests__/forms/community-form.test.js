import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import CommunityForm from '../../CommunityForm/create_edit_community.js'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<CommunityForm />, div)
})

it('renders the form', () => {
  const wrapper = shallow(<CommunityForm />)
  expect(wrapper.find('form')).toHaveLength(1)
})

// describe('<MyComponent />', () => {
//   it('renders three <Foo /> components', () => {
//     const wrapper = shallow(<MyComponent />);
//     expect(wrapper.find(Foo)).to.have.lengthOf(3);
//   });

// - test that a form loads (testing a React component with Jest)
// - test that form updates data successfully when you submit
// - test that form doesn't submit data without required field (name)
// - test that form doesn't submit data with invalid input (name with special characters)

// html call
// use expect
// to contain or to contain equal
// can do deep equal

// validation
// simulate button click, use simulate function
// can simulate click
