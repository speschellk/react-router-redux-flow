import React from 'react';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';
import { shallow } from 'enzyme'; // stubs out all the children components
import preload from '../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct number of shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct number of shows for search term', () => {
  const searchWord = 'black';
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={ searchWord } />);
  const showCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
