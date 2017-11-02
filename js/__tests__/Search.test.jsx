import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme'; // stubs out all the children components

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
