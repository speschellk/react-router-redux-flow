import React from 'react';
import Search from '../Search';
import ShowCard from '../ShowCard';
import { shallow } from 'enzyme'; // stubs out all the children components
import preload from '../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct number of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct number of shows for search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
